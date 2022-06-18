const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Please enter the price for this product']
  },
  quantity: {
    type: Number,
    default: 1,
    min: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  orderedBy: [{
    type: String,
  }],
  category: {
    type: String
  },
  discount: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  modifiedAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('product', ProductSchema);