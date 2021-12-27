import CategoryService from "../services/CategoryService.js"

class CategoryController {

    async create(req, res) {
        try {
            const item = await CategoryService.create(req.body)
            res.status(200).json({"message": "Successfully created"})
        } catch(e) {
            res.status(400).json({"message": e.message})
        }
    }

    async getAll(req, res) {
        try {
            const item = await CategoryService.getAll()
            res.json(item)
        } catch(e) {
            res.status(500).json({"message": e.message})
        }
    }

    async update(req, res) {
        try {
            const item = await CategoryService.update(req.body)
            res.status(200).json({"message": "Successfully updated"})
        } catch(e) {
            res.status(400).json({"message": e.message})
        }
    }

    async delete(req, res) {
        try {
            const item = await CategoryService.delete(req.body)
            res.status(200).json({"message": "Successfully deleted"})
        } catch(e) {
            res.status(400).json({"message": e.message})
        }
    }
}

export default new CategoryController();