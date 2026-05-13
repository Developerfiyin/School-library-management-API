import express from "express";
import Student from "../Models/studentModel";

//CREATE STUDENT 

export const createStudent = async (req, res) => {
  const { name } = req.body;
if (!name || typeof name !== "string" || !name.trim()) { 
  
  res.status(400).json({ok: false, message: "Fill in your name correctly!"})
}

  // if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //   res.status(400).json({ ok: false, message: "Please provide a valid email address" });
  //   return;
    
  // }
  try {
    const count = await Student.countDocuments();

    //const studentIdGen = `STD-${String(count + 1).padStart(4, "0")}`;

    const newStudent = await Student.create({
      name,
      email,
      // studentId: studentIdGen,
    });

    res.status(201).json({
      ok: true,
      message: "Student succesfully created",
      data: newStudent,
    });
  } catch (err) {
    res
      .status(500)
      .json({ ok: false, error: { message: "cannot create student" } });

    console.log(err.message);
  }
};

//GET ALL STUDENTS

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ name: 1 });
    res
      .status(200)
      .json({ ok: true, message: "Request successful", data: students });
  } catch (err) {
    res
      .status(500)
      .json({ ok: false, error: { message: "cannot fetch students" } });
    console.error(err.message);
  }
};

//GET STUDENTS BY ID

export const getStudentsById = async (req, res) => {
  const id = req.params.id;
  try {
    const students = await Student.findById(id);
    if (!students) {
      return res
        .status(400)
        .json({
          ok: false,
          message: "Invalid Input!! Fill the field correctly",
        });
    }
    res.status(200).json({ ok: true, message: "Request Sucessfull", data: students });
  } catch (error) {
    res
      .status(500)
      .json({
        ok: false,
        message: {ok: false, message: "cannot fetch student with the given id" },
      });
    console.error(error.message);
  }
};
