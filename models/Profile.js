const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  credits: {
    type: Number
  },
  workerRatingReceived: {
    type: Number
  },
  workerJobsCompleted: {
    type: Number
  },
  bossRatingReceived: {
    type: Number
  },
  bossJobsCompleted: {
    type: Number
  },
  location: {
    type: String
  },
  skills: {
    type: [String]
  },
  bio: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
