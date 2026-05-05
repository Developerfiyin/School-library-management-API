import express from 'express'
import Author from '../Models/authorModel'
import Author from '../Models/authorModel'

//CREATE AUTHOR
export const createAuthor = async (req, res) => {

    try {
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
    }
}

//UPDATE AUTHOR BY ID

export const updateAuthor = async (req, res) => {
    const id = req.params.id;
    const {name, bio} = req.body;
    if (!name || !bio) {
        return res.status(400).json({ ok: false, message: "Missing Input!! Fill the field correctly" })
    }
    try {
        const Author = await  Author.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
        res.status(200).json({ ok: true, message: "Author updated successfully", data: Author })

        
    } catch (error) {
        
    }
}

// DELETE AUTHORS

export const deleteAuthors = async (req, res) => {
    const author = req.author
    
try {
    const deletedAuthor = await Author.deleteOne()
    res.status(200).json({ ok: true, message: "Author deleted successfully", data: deletedAuthor }) 

} catch (error) {
    res.status(500).json({ ok: false, message: "Error deleting author" })
    console.error(error.message)
    
}
}