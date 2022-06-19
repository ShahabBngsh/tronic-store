const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Cart'
  },
  shippingAddress: {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  paymentMethods: {
    type: String,
    required: true
  },
  paymentResult: {
    id: {
      type: String,
    },
    status: {
      type: String,
    },
    updateTime: {
      type: String,
    },
    emailAddress: {
      type: String,
    }
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  },
  paidAt: {
    type: Date,
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false
  },
  deliveredAt: {
    type: Date
  }
  
},
{
  timestamp: true
})