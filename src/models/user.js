
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    minlength: 8,
    trim: true
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
