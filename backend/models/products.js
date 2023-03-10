const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number, 
  inStock: Boolean
});

module.exports = mongoose.model('Product', productSchema);