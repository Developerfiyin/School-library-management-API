import express from "express";
import {
  getAuthorById,
  getAuthors,
  createAuthor,
} from "../Controllers/authorController";
const router = express.Router();

router.post(" /", createAuthor);
router.get("/", getAuthors);
router.get("/:id", getAuthorById);

export default router;
