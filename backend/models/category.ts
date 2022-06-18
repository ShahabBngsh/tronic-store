const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
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
});

module.exports = mongoose.model('category', CategorySchema);