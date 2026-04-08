import mongoose from "mongoose";
const { Schema } = mongoose;
const ModelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    bio : String,

}, {timestamps: true});


const Model = mongoose.model("Author", ModelSchema)
export default Model;