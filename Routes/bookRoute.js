import express from 'express'
import { createBook } from '../Controllers/bookController.js';
const router = express.Router();

router.get(" /books", createBook);

export default router;