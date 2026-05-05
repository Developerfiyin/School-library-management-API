import express from "express";

import Library from "../Models/libraryModel";

//CREATE LIBRARY ATTENDANT

export const createLibraryAttendant = async (req, res) => {

  try {
    const libraryAttendant = await Library.create(req.body);

    res
      .status(201)
      .json({
        ok: true,
        message: "Library attendant has been created successfully",
        data: libraryAttendant, 
      });
  } catch (error) {
    res
      .status(500)
      .json({ ok: false, message: "Error creating library attendant" });    
  }
};

//GET ALL LIBRARY ATTENDANTS

export const getLibraryAttendants = async (req, res) => {
    try {
        const libraryAttendants = await Library.find().sort({ name: 1 })
        res.status(200).json({ ok: true, message: "Request successful", data: libraryAttendants })
        } catch (error) {
        res.status(500).json({ ok: false, message: "Error fetching library attendants" })
    }
} 

