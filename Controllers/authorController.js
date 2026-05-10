import express from 'express'
import Author from '../Models/authorModel'

//CREATE AUTHOR
export const createAuthor = async (req, res) => {

    try {
        const {name, bio} = req.body;
    if (!name || !bio) {
        return res.status(400).json({ ok: false, message: "Missing Input!! Fill the field correctly" })
    }
        const author = await Author.create(req.body)
        res.status(201).json({ ok: true , message: "Author has been created successfully", data: author })
    } catch (error) {
        res.status(500).json({ ok: false, message: "Error  creating author" })
    }
}

//GET ALL AUTHORS

export const getAuthors = async (req, res) => {
 try {
    const authors = await Author.find().sort({ name: 1 })
    res.status(200).json({ ok: true, message: "Request successful", data: authors })
 } catch (error) {
    res.status(500).json({ ok: false, message: "Error fetching authors" })
 }
}

//GET AUTHOR BY ID
export const getAuthorById = async (req, res) => {
    const id = req.params.id
    
    try {
        const author = await Author.findById(id)
        if (!author) {
            return res.status(400).json({ ok: false, message: "Invalid Input!! Fill the field correctly", data: null })
        }
        res.status(200).json({ ok: true, message: "Request successful", data: author })
    } catch (error) {
        res.status(500).json({ ok: false, message: "Error fetching author" })
        console.log(error.message);
        
    }
}

//Update Author
export const updateAuthor = async (req, res) => {
 const author = req.author;
try {
    
        await author.set({ name, bio }).save()
        res.status(200).json({ ok: true, message: "Author updated successfully", data: author })
    } catch (error) {
        res.status(500).json({ ok: false, message: "Error updating author" })
        console.log(error.message);
    }

} 



//UPDATE AUTHOR BY ID

export const updateAuthorById = async (req, res) => {
    const id = req.params.id;
    const {name, bio} = req.body;
    if (!name || !bio) {
        return res.status(400).json({ ok: false, message: "Missing Input!! Fill the field correctly" })
    }
    try {
        const author = await  Author.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
        res.status(200).json({ ok: true, message: "Author updated successfully", data: author })

        
    } catch (error) {
        res.status(500).json({ok: false, message: "Error updating author."})
        console.log(error.message);
        
    }
    
}

// DELETE AUTHOR BY ID

export const deleteAuthor = async (req, res) => {
  //  const author = req.author
  const id = req.params.id;
    
try {
    const deletedAuthor = await Author.deleteOne({ _id: id })
    res.status(200).json({ ok: true, message: "Author deleted successfully", data: deletedAuthor }) 

} catch (error) {
    res.status(500).json({ ok: false, message: "Error deleting author" })
    console.error(error.message)
    
}
}