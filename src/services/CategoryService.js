import Subcategory from "../models/Subcategory.js";
import Category from "../models/Category.js";

class CategoryService {
    
    async findSubcatIds(SubcatArray) {
        let subcategoriesIds = [];

        for(const subcat of SubcatArray) {
            const subcategory = await Subcategory.findOne({ value: subcat }).exec();
            if(subcategory == null) {
                throw new Error('Subcategory not found');
            }

            subcategoriesIds.push(subcategory);
        }

        return subcategoriesIds;
    }

    async create(category) {

        const subcategoriesIds = await this.findSubcatIds(category.subcategories);

        category.subcategories = subcategoriesIds;
        
        const createdCategory = await Category.create(category);
        return createdCategory;
    }

    async getAll() {
        const categories = await Category.find().populate('subcategories', 'value');
        return categories;
    }

    async update(category) {
        if(!category._id) {
            throw new Error('ID is not specified');
        }
        
        const subcategoriesIds = await this.findSubcatIds(category.subcategories);

        category.subcategories = subcategoriesIds;

        const updatedCategory = await Category.findByIdAndUpdate(category._id, category, {new: true});
        return updatedCategory;
    }

    async delete(category) {
        if(!category._id) {
            throw new Error('ID is not specified');
        }
        
        const deletedCategory = await Category.findByIdAndDelete(category._id);
        return deletedCategory;
    }

}

export default new CategoryService();