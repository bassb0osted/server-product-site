import path from 'path';
import { fileURLToPath } from 'url';
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

    async getImg(req, res) {
        try {
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);

            let imgName = req.params["imgName"];
            let pathFile = path.join(__dirname, '../images/', imgName)
            res.sendFile(pathFile);
            
        } catch(e) {
            res.status(400).json({"message": e.message})
        }
    }
}

export default new ItemController();