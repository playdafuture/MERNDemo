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
    //   check('status', 'Status is required')
    //     .not()
    //     .isEmpty(),
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
      console.log('new location');
      profileFields.location = location;
    }
    if (skills) {
      // assumes skills comes in array format. in case of CSV format, use split with trim
      console.log('new skills');
      profileFields.skills = skills; //.split(',').map(skill => skill.trim());
    }
    if (bio) {
      console.log('new bio');
      profileFields.bio = bio;
    }

    try {
      console.log(profileFields);
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
        //create
        profile = new Profile(profileFields);
        await profile.save();
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

module.exports = router;
