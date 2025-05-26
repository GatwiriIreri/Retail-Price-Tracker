const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['groceries', 'vegetables', 'fruits', 'dairy', 'beverages', 'snacks', 'household']
  },
  unit: {
    type: String,
    required: [true, 'Unit is required'],
    enum: ['kg', 'g', 'l', 'ml', 'piece', 'packet', 'dozen', 'bottle']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);