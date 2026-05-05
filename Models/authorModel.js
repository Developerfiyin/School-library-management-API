import mongoose from "mongoose";
const { Schema } = mongoose;
const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    bio : {
        type: String,
        trim: true
    }

}, {timestamps: true});


const Author = mongoose.model("Author", authorSchema);
export default Author;