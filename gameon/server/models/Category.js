const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 60,
    trim: true,
  }
});


const category = model('Category', categorySchema);

module.exports = Category;
