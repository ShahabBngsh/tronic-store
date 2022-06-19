const express = require('express');
const router = express.Router();

import {
  signup,
  login,
  getUserProfile,
  updateUserProfile,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

import { protect, admin } from '../middleware/authMiddleware'

router.post('/register', signup);
router.post('/login', login);

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

export default router;