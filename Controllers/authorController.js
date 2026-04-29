import express from 'express'
import authorSchema from "../Models/authorModel"

//CREATE AUTHOR
export const createAuthor = async (req, res) => {

    try {
        const author = await authorSchema.create(req.body)
        res.status(201).json({ ok: true , message: "Author has been created successfully", data: author })
    } catch (error) {
        res.status(500).json({ ok: false, message: "Error  creating author" })
    }
}

//GET ALL AUTHORS

export const getAuthors = async (req, res) => {
 try {
    const authors = await authorSchema.find().sort({ name: 1 })
    res.status(200).json({ ok: true, message: "Request successful", data: authors })
 } catch (error) {
    res.status(500).json({ ok: false, message: "Error fetching authors" })
 }
}

//GET AUTHOR BY ID
export const getAuthorById = async (req, res) => {
    const id = req.params.id
    try {
        const author = await authorSchema.findById(id)
        if (!author) {
            return res.status(400).json({ ok: false, message: "Invalid Input!! Fill the field correctly", data: null })
        }
        res.status(200).json({ ok: true, message: "Request successful", data: author })
    } catch (error) {
        res.status(500).json({ ok: false, message: "Error fetching author" })
    }
}
