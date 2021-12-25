import Item from '../models/Item.js';

class ItemService {

    async create(item) {
        const createdItem = await Item.create(item);
        return createdItem;
    }

    async getAll() {
        const items = await Item.find();
        return items;
    }

    async update(item) {
        if(!item._id) {
            throw new Error('ID is not specified');
        }
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