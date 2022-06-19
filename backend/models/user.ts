const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart'
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
},
{
  timestamp: true
});

UserSchema.methods.matchPassword = async (password) => {
  return await bcrypt.compare(password, this.password);
}

UserSchema.pre('save', async (next) => {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
});


module.exports = mongoose.model('User', UserSchema);