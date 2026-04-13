import mongoose from "mongoose";
const URL = process.env.MONGODB_URI;

async function connectDB () {
    await mongoose.connect(URL);
    console.log("MongoDB connected successfully!");
}


console.log("Jude Ani is here!!!!!!!!!")
console.log(" SALAMI DAVID OLLUWATOBIOLA a.k.a  DAVSAL IS SLEEPING!. ")
export default connectDB;

