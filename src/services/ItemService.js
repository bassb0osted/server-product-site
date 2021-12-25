import Item from '../models/Item.js';
import Subcategory from '../models/Subcategory.js';

class ItemService {

    async create(item) {
        const subcategory = await Subcategory.findOne({ value: item.subcategory }).exec();
        
        if(subcategory == null) {
            throw new Error('Subcategory not found');
        }

        item.subcategory = subcategory._id;
        
        const createdItem = await Item.create(item);
        return createdItem;
    }

    async getAll() {
        const items = await Item.find().populate('subcategory', 'value');
        return items;
    }

    async update(item) {
        if(!item._id) {
            throw new Error('ID is not specified');
        }
        
        const subcategory = await Subcategory.findOne({ value: item.subcategory }).exec();
        
        if(subcategory == null) {
            throw new Error('Subcategory not found');
        }

        item.subcategory = subcategory._id;

        const updatedItem = await Item.findByIdAndUpdate(item._id, item, {new: true});
        return updatedItem;
    }

    async delete(item) {
        if(!item._id) {
            throw new Error('ID is not specified');
        }
        
        const deletedItem = await Item.findByIdAndDelete(item._id);
        return deletedItem;
    }

}

export default new ItemService();