import mongoose from "mongoose";

const {Schema} = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email : {
        type: String,
        unique: true,
    },

    studentId : {
        type: String,
        unique: true,
    }

}, {timestamps: true});


const Schema = mongoose.model("student", studentSchema);
export default Schema;
