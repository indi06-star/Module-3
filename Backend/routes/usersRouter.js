import express from 'express';
import { getUsers, getUserById, resetPassword, signUpUser } from '../controller/usersController.js';
import { loginUser } from "../controller/authController.js"; // ✅ Ensuring correct imports


const router = express.Router();

// Get all users
router.get('/', getUsers);

// Get a user by user_id
router.get('/users/:user_id', getUserById);

// Reset password
router.patch('/reset-password', resetPassword);

// Sign up a user
router.post('/signup', signUpUser); // Updated route for clarity

// Login (If needed, uncomment and implement in `usersController.js`)
router.post('/login', loginUser);

export default router;
