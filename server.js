import express from "express";
import "dotenv/config";

import connectDB from "./Config/Database.js";
const app = express();

connectDB();


app.get("/", (req, res) => {
  res.send("Hello World, welcome to the School Library Management API!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
