import express from 'express'

const router = express.Router();

router.get("/books", (req, res) => {
    // Handle GET request for all books
});

router.post("/books/:id", createBook);
export default router;