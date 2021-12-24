const mongoose = require('mongoose');

const Category = new mongoose.Schema({
    name: { type: String, required: true },
    subcategories: [{type: String, required: true, ref: 'Subcategory'}]
});

module.exports = mongoose.model('Category', Category);