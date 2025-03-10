import express from 'express';
import { getRentals, rent } from '../controller/rentalsController.js';

const router = express.Router();

router.get('/:id', getRentals);

router.post('/book', rent)

export default router;
