import express from "express";
import BookModel from "../Models/booksModel.js";

export const borrowBook = async (req, res) => {
  const { returnDate } = req.body;
  try {

  } catch (err) {
    res.status(500).json({ error: { message: "Cannot borrow book" } });

    console.log(err.message);
  }
};

export default borrowBook;
