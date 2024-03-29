import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
},
  {
    timestamp: true
  });

const DiscountSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  percentage: {
    type: Number,
    required: true,
    min: 1,
    max: 99
  },
  endsInDays: {
    type: Number,
    required: true,
    min: 1
  },
  isEnabled: {
    type: Boolean,
    default: false
  }
},
  {
    timestamp: true
  });

const ProductSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: [true, 'Please enter the price for this product']
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  numReviews: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true
  },
  initialStock: {
    type: Number,
    required: true
  },
  currentStock: {
    type: Number,
    default: 0,
    required: true
  },
  discount: {
    type: DiscountSchema
  },
  reviews: [ReviewSchema]
},
  {
    timestamp: true
  })

const Product = mongoose.model('Product', ProductSchema);
export default Product;