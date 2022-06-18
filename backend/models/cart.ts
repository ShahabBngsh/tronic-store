// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: String
  },
  items: [{
    productId: {
      type: String
    },
    name: String,
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity cannot be less than 1'],
      default: 1
    }
  }],
  totalPrice: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  modifiedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('cartSchema', CartSchema);