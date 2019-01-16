const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  id: Number,
  recipename: String,
  category: String
});

module.exports = mongoose.model('Recipe', recipeSchema);