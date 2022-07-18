import Router from 'express';
const router = Router();
import {
  getProducts,
  getTop3Products,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
} from '../controllers/productController.js';

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);

router.route('/getTop3Products')
  .get(getTop3Products);

router.route('/getCategories')
  .get(getCategories);

router.route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);


export default router;