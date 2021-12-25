import ItemService from "../services/ItemService.js"

class ItemController {

    async create(req, res) {
        try {
            const item = await ItemService.create(req.body)
            res.status(200).json({"message": "Successfully created"})
        } catch(e) {
            res.status(400).json({"message": e.message})
        }
    }

    async getAll(req, res) {
        try {
            const item = await ItemService.getAll()
            res.json(item)
        } catch(e) {
            res.status(500).json({"message": e.message})
        }
    }

    async update(req, res) {
        try {
            const item = await ItemService.update(req.body)
            res.status(200).json({"message": "Successfully updated"})
        } catch(e) {
            res.status(400).json({"message": e.message})
        }
    }

    async delete(req, res) {
        try {
            const item = await ItemService.delete(req.body)
            res.status(200).json({"message": "Successfully deleted"})
        } catch(e) {
            res.status(400).json({"message": e.message})
        }
    }
}

export default new ItemController();