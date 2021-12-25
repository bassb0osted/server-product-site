import SubcategoryService from "../services/SubcategoryService.js"

class SubcategoryController {

    async create(req, res) {
        try {
            const Subcategory = await SubcategoryService.create(req.body)
            res.status(200).json({"message": "Successfully created"})
        } catch(e) {
            res.status(400).json({"message": e.message})
        }
    }

    async getAll(req, res) {
        try {
            const Subcategory = await SubcategoryService.getAll()
            res.json(Subcategory)
        } catch(e) {
            res.status(500).json({"message": e.message})
        }
    }

    async update(req, res) {
        try {
            const Subcategory = await SubcategoryService.update(req.body)
            res.status(200).json({"message": "Successfully updated"})
        } catch(e) {
            res.status(400).json({"message": e.message})
        }
    }

    async delete(req, res) {
        try {
            const Subcategory = await SubcategoryService.delete(req.body)
            res.status(200).json({"message": "Successfully deleted"})
        } catch(e) {
            res.status(400).json({"message": e.message})
        }
    }
}

export default new SubcategoryController();