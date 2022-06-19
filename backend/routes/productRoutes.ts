const { Router } = require('express');
const router = Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController';

import {protect, admin} from '../middleware/authMiddleware'

router.route('/products')
  .get(getProducts)
  .post(protect, admin, createProduct);

router.route('/products/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = router;