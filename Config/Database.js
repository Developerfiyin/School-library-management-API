import mongoose from "mongoose";
const URL = process.env.MONGODB_URI;

async function connectDB ( ) {
    await mongoose.connect(URL);
    console.log("Davsal is here with me on a whatsapp call !!!!!");
    

}

export default connectDB;

