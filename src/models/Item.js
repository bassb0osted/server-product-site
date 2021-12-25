import mongoose from 'mongoose'

const Item = new mongoose.Schema({
    name: { type: String, required: true },
    composition: { type: [String], required: true },
    price: {type: Number, required: true},
    subcategory: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Subcategory'},
    picture: {type: String, required: true}
});

export default mongoose.model('Item', Item);