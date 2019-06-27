const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');

/**
 * @route   POST api/users
 * @desc    Register user
 * @access  Public
 */
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'A valid email is required').isEmail(),
    check(
      'password',
      'A password of at least 6 characters long is required'
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        //user already exist
        return res //respond with
          .status(400) //bad request
          .json({
            //include json message
            errors: [
              { msg: 'Email already exists', param: 'email', location: 'body' }
            ]
          });
      }
      // Get users gravatar
      const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' }); //size 200, rated pg, default mm
      // Encrypt password
      user = new User({ name, email, avatar, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
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
