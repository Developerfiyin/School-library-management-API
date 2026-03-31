import mongoose from "mongoose";
const { Schema } = mongoose;
const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    bio : String,

}, {timestamps: true});


