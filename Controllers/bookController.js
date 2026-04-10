import books from "../Models/booksModel.js";

export const borrowBook = async (req, res) => {
    try {
   const {returnDate, StudentId, LibrarianId} = req.body;
   const bookId = req.params.id;
    const book = await books.findById(bookId);

    if(!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (book.status === "OUT") {
        return res.status(400).json ({message: "OOPSS!!, the book out  already!. Please try again later"});
    }

    book.status = "OUT";
    book.borrowedBy = StudentId;
    book.issuedBy = LibrarianId;
    book.returnDate = returnDate;

    await book.save();

    res.status(200).json({ message: "Book borrowed successfully", book });
    }
    catch (error) {
   res.status(500).json({ message: "An error occurred while borrowing the book", error: error.message });
    }
}