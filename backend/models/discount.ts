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
  createdAt:{
    type: Date,
    default: Date.now()
  },
  modifiedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('discount', DiscountSchema);