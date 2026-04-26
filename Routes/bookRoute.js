import express from 'express'
import bookController from "../Controllers/bookController";

const router = express.Router();

router.get("/books", (req, res) => {
    // Handle GET request for all books
});

router.post("/books/:id", createBook);
router.get("/books", )
export default router;