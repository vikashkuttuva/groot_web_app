const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  phonenumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 10
  },
  class: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  address: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },


}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;