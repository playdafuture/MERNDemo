const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
/**
 * @route   GET api/auth
 * @desc    Test route
 * @access  Public
 */
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); //don't include user's password in the response
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route   POST api/auth
 * @desc    Authenticate user & get token
 * @access  Public
 */
router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        //user does not exist
        return res //respond with
          .status(400) //bad request
          .json({
            //include json message
            errors: [
              {
                msg: 'User (email) does not exist',
                param: 'email',
                location: 'body'
              }
            ]
          });
      }
      // Compare password
      const isMatch = await bcrypt.compare(password, user.password); //compare plain-text password with the encrypted password in the DB
      if (!isMatch) {
        return res //respond with
          .status(400) //bad request
          .json({
            //include json message
            errors: [
              //for production, it's best to return the same message
              {
                msg: 'Password does not match',
                param: 'password',
                location: 'body'
              }
            ]
          });
      }
      // Return JWT
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      // console.log(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
