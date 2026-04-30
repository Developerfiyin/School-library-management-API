import express from "express";

import Library from "../Models/libraryModel";

//CREATE LIBRARY ATTENDANT

export const createLibraryAttendant = async (req, res) => {
  const { name } = req.body;
  try {
    const libraryAttendant = await Library.create({ name });

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
