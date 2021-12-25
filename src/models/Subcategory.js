import mongoose from 'mongoose'

const Subcategory = new mongoose.Schema({
    value: { type: String, required: true, unique: true }
});

export default mongoose.model('Subcategory', Subcategory);