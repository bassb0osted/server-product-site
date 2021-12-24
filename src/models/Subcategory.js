const mongoose = require('mongoose');

const Subcategory = new mongoose.Schema({
    value: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Subcategory', Subcategory);