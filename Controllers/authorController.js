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

export const getAuthors = () => {
 try {
    const authors = await author
 } catch (error) {
    
 }
}

