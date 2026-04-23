import express from "express"

const router = express.Router();



router.post("/students", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message : "Name and email are required"});
    }

    return res.status(201).json({ message: "Student created successfully", student: { name, email } });
    
})



