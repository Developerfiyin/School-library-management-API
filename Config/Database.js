import mongoose from "mongoose";
const URL = process.env.MONGODB_URI;

async function connectDB ( ) {
    await mongoose.connect(URL);
    console.log("Davsal is here !!!!!");
    

}

export default connectDB;

