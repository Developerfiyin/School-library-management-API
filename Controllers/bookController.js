import books from "../Models/booksModel.js";

exports.borrowedBooks = async (req, res) => {
    try {
   const {returnDate, StudentId, LibrarianId} = req.body;
   const bookId = req.params.id;
    const book = await books.findById(bookId);

    if(!book) {
        return res.status(404).json({ message: "Book not found" });
    }


    if (book.Status === "OUT") {
        return res.status(400).json ({message: "OOPs!!, the book out  already!. Please try again later"});
    }
    }
    catch (error) {

    }
}