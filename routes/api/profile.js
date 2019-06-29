const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

/**
 * @route   GET api/profile/me
 * @desc    Get current user's profile
 * @access  Private
 */
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );
    if (!profile) {
      return res
        .status(400)
        .json({ msg: 'Profile does not exist for current user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route   POST api/profile
 * @desc    Create or update a user's profile
 * @access  Private
 */
router.post(
  '/',
  [
    auth
    // , //enforce certain fields
    // [
    //   check('skills', 'Skills is required')
    //     .not()
    //     .isEmpty()
    // ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { location, skills, bio } = req.body;

    //build profile object
    const profileFields = {};
    profileFields.user = req.user.id;

    if (location) {
      profileFields.location = location;
    }
    if (skills) {
      // assumes skills comes in array format. in case of CSV format, use split with trim
      profileFields.skills = skills; //.split(',').map(skill => skill.trim());
    }
    if (bio) {
      profileFields.bio = bio;
    }

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        //res.send(profileFields);
      } else {
        //safety check for deleted user
        let u = await User.findOne({ user: req.user.id });
        if (!u) {
          return res
            .status(401)
            .json({ msg: 'Unable to update profile for non-existing user' });
        } else {
          //create
          profile = new Profile(profileFields);
          await profile.save();
        }
        //res.send(profileFields);
      }
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
    res.send(profileFields);
  }
);

/**
 * @route   GET api/profile/search
 * @desc    search all other profiles based on the parameters passed
 * @access  Public
 */
router.get('/search', async (req, res) => {
  try {
    const { user_id, skills, location } = req.body;
    if (!user_id && !skills && !location) {
      //console.log('no params, get EVERYONE');
      const profiles = await Profile.find().populate('user', [
        'name',
        'avatar'
      ]);
      res.json(profiles);
    } else if (user_id) {
      //console.log('get user by id');
      const profile = await Profile.findOne({ user: user_id }).populate(
        'user',
        ['name', 'avatar']
      );
      if (!profile) {
        return res.status(404).json({ msg: 'Could not find such user' });
      } else {
        return res.json(profile);
      }
    } else {
      if (!skills) {
        //console.log('use location to search')
        const profiles = await Profile.find({ location: location }).populate(
          'user',
          ['name', 'avatar']
        );
        res.json(profiles);
      } else if (!location) {
        //console.log('use skills to search')
        const profiles = await Profile.find({
          skills: { $all: skills }
        }).populate('user', ['name', 'avatar']);
        res.json(profiles);
      } else {
        //console.log('use both skills & location to search')
        const profiles = await Profile.find({
          location: location,
          skills: { $all: skills }
        }).populate('user', ['name', 'avatar']);
        res.json(profiles);
      }
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route   DELETE api/profile
 * @desc    Delete current user's profile
 * @access  Private
 */
router.delete('/', auth, async (req, res) => {
  try {
    //todo: remove posts
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
