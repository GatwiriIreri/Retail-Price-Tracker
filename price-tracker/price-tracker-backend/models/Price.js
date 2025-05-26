const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product reference is required']
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier',
    required: [true, 'Supplier reference is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0.01, 'Price must be at least 0.01']
  },
  date: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    maxlength: [500, 'Notes cannot exceed 500 characters']
  }
});

// Create indexes for better performance
priceSchema.index({ product: 1, date: -1 });
priceSchema.index({ supplier: 1, date: -1 });

module.exports = mongoose.model('Price', priceSchema);