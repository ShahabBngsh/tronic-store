const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  items: [{
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity cannot be less than 1'],
      default: 1
    },
    image: {
      type: Number
    },
    price: {
      type: Number,
      required: true
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product'
    },
    
  }],
  totalPrice: {
    type: Number,
    default: 0
  }
},
{
  timestamp: true
});

module.exports = mongoose.model('Cart', CartSchema);