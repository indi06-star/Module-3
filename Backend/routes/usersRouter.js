import express from 'express';
import {  getUsers,  getUserById,  resetPassword,  signUpUser,  deleteUser,   patchUser, loginController} from '../controller/usersController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:user_id', getUserById)
// router.patch('/reset-password', resetPassword);
router.post('/', signUpUser);
router.delete('/:user_id', deleteUser);
router.patch('/:user_id', patchUser);
///login 
router.patch('/reset-password', resetPassword);
router.post('/login',loginController)
export default router;
