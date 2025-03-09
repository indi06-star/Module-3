import express from 'express';
import { getUsers, getUserById, resetPassword, signUpUser, updateUser } from '../controller/usersController.js';
import { loginUser } from "../controller/authController.js"; // ✅ Ensuring correct imports


const router = express.Router();

// Get all users
router.get('/', getUsers);

// Get a user by user_id
router.get('/users/:user_id', getUserById);

// Reset password

// Sign up a user
router.post('/signup', signUpUser); // Updated route for clarity

// Login (If needed, uncomment and implement in `usersController.js`)
router.post('/login', loginUser);

router.patch('/update/:user_id', updateUser)

router.patch('/reset-password', resetPassword);

export default router;
