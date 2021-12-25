import Router from 'express';

import ItemController from '../controllers/ItemController.js';
import SubcategoryController from '../controllers/SubcategoryController.js';

const router = new Router();

router.post('/items', ItemController.create);
router.get('/items', ItemController.getAll);
router.delete('/items', ItemController.delete);
router.put('/items', ItemController.update);

router.post('/subcategories', SubcategoryController.create);
router.get('/subcategories', SubcategoryController.getAll);
router.delete('/subcategories', SubcategoryController.delete);
router.put('/subcategories', SubcategoryController.update);

export default router;