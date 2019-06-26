const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');
  // Check if no token
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'A JSON Web Token is required for this action' });
  }
  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ msg: 'A valid JSON Web Token is required for this action' });
  }
};
