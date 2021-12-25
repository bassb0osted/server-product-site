import ItemService from "../services/ItemService.js"

class ItemController {

    async create(req, res) {
        try {
            const item = await ItemService.create(req.body)
            res.status(200).json({"message": "Successfully created"})
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const item = await ItemService.getAll()
            res.json(item)
        } catch(e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const item = await ItemService.update(req.body)
            res.status(200).json({"message": "Successfully updated"})
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const item = await ItemService.delete(req.body)
            res.status(200).json({"message": "Successfully deleted"})
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new ItemController();