const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const UserSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a valid password'],
    minlength: [6, 'Minimum length must be at least 6 characters']
  },
  phone: {
    type: String,
    required: [true, 'Please enter a phone number']
  },
  address: {
    type: String,
    required: true
  },
  orders: [{
    type: String
  }],
  cartId: {
    type: String
  },
  createdAt:{
    type: Date,
    default: Date.now()
  },
  modifiedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('user', UserSchema);