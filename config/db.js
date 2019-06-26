const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    console.log(
      'Attempting to connect to MongoDB with the following credentials...'
    );
    console.log(db);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      userCreateIndex: true
    });
    console.log('MongoDB Connected!');
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
