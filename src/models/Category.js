import mongoose from 'mongoose'

const Category = new mongoose.Schema({
    name: { type: String, required: true },
    subcategories: [{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Subcategory'}]
});

export default mongoose.model('Category', Category);