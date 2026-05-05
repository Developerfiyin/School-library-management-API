import express from 'express'
import bookController from "../Controllers/bookController";
import { get } from 'mongoose';

const router = express.Router();

router.get("/books", (req, res) => {
    // Handle GET request for all books
});

router.post("/books/:id", createBook);
router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);
router.post("/books/:id/borrow", borrowBook);
router.post("/books/:id/return", returnBook);

export default router;