import Subcategory from '../models/Subcategory.js'

class SubcategoryService {

    async create(subcategory) {
        const createdSubcategory = await Subcategory.create(subcategory);
        return createdSubcategory;
    }

    async getAll() {
        const Subcategories = await Subcategory.find();
        return Subcategories;
    }

    async update(subcategory) {
        if(!subcategory._id) {
            throw new Error('ID is not specified');
        }
        const updatedSubcategory = await Subcategory.findByIdAndUpdate(subcategory._id, subcategory, {new: true});
        return updatedSubcategory;
    }

    async delete(subcategory) {
        if(!subcategory._id) {
            throw new Error('ID is not specified');
        }
        const deletedSubcategory = await Subcategory.findByIdAndDelete(subcategory._id);
        return deletedSubcategory;
    }

}

export default new SubcategoryService();