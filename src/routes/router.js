import Router from 'express';

import ItemController from '../controllers/ItemController.js';
import SubcategoryController from '../controllers/SubcategoryController.js';
import CategoryController from '../controllers/CategoryController.js';

const router = new Router();

router.post('/items', ItemController.create);
router.get('/items', ItemController.getAll);
router.delete('/items', ItemController.delete);
router.put('/items', ItemController.update);

router.get('/items/img/:imgName', ItemController.getImg);

router.post('/subcategories', SubcategoryController.create);
router.get('/subcategories', SubcategoryController.getAll);
router.delete('/subcategories', SubcategoryController.delete);
router.put('/subcategories', SubcategoryController.update);

router.post('/categories', CategoryController.create);
router.get('/categories', CategoryController.getAll);
router.delete('/categories', CategoryController.delete);
router.put('/categories', CategoryController.update);

export default router;