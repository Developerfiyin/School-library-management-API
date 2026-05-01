import express from "express";
import books from "../Models/booksModel.js";
import BookModel from "../Models/booksModel.js";



export const borrowBook = async (req, res) => {
    try {
   const {returnDate, studentId, librarianId} = req.body;
    if (!studentId) {
        return res.status(400).json ({message: "Student id required"});
    }

     if (!returnDate) {
        return res.status(400).json ({message: "return date required"});
    }

     if (!librarianId) {
        return res.status(400).json ({message: "Librarian id  required"});
    }
    
   const bookId = req.params.id; 
    const book = await books.findById(bookId);

 

    if(!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (book.status === "OUT") {
        return res.status(400).json ({message: "OOPSS!!, the book out  already!. Please try again later"});
    }

    
  const  createBook  = async  (req, res) => {
    const id = req.params.id;
    const {title, author, isbn} = req.body;
    const newBook = {id, title, author, isbn, status: "AVAILABLE"};
    books.push(newBook);
    res.status(201).json({message: "Book created successfully", book: newBook});
}


    book.status = "OUT";
    book.borrowedBy = studentId;
    book.issuedBy = librarianId;
    book.returnDate = returnDate;

    await book.save();

    res.status(200).json({ message: "Book borrowed successfully", book });
    }
    catch (error) {
   res.status(500).json({ message: "An error occurred while borrowing the book", error: error.message });
    }
}

// GET ALL BOOKS
export  const getBooks = async (req, res)  => {

    try {
       const AllBooks = await BookModel.find().sort({title: 1})
       res.status(200).json({ok:true, message: "REQUEST SUCCESSFULL", data : AllBooks})

       if(!AllBooks) {
        return res.status(400).json({ok: false, message: "Missing Input, Book Required"})
       }
    } catch (error) {
        res.status(500).json({ok: false, error: error.message})
        
    }
}


// GET BOOK BY ID


export const getBooksById = async (req, res) =>  {
    const id = req.params.id;
    try {
       const book = await  BookModel.findById(id)
         if (!book) {
            return res.status(400).json({ok: false, message: "Invalid Input!! Fill the field correctly", data: null })
        }
        res.status(200).json({ok: true, message: "Request successful", data: book})

    } catch (error) {
        res.status(500).json({ok: false, error: error.message})
    }
}

//UPDATE BOOK BY ID 

export const updateBook = async (req, res ) => {
const id = req.params.id;
const {title, author, isbn} = req.body;
try {
  const updateBook =   await BookModel.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )
  res.status(200).json({ok: true, message: "Book updated successfully", data: updateBook})
} catch (error) {
  res.status(500).json({ok: false, error: error.message})
}
}


