import express from "express";
import "dotenv/config";

import connectDB from "./Config/Database.js";


 const app =  express();

app.get("/", (req, res) => {
  res.send("Hello World, welcome to the School Library Management API!");
});
const startDb = async () => {
 
  try {
    
  } catch (error) {
    
  }
  await connectDB();

    app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

}




 startDb();



