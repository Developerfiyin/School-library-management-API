import express from "express";


import {createStudent,getStudent, getStudentsById} from "../Controllers/studentController";

const router = express.Router();



router.post("/students", (req, res) => {
    const { name, email } = req.body;
})

router.post("/students", createStudent);
router.get("/students", getStudent);
router.get("/students/:id", getStudentsById);

