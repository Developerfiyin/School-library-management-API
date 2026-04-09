import mongoose from "mongoose";
const { Schema } = mongoose;
const ModelSchema = new Schema({
   title: {
        type: String,
        required: true,
    },

    isbn : {
        type: String,
        required: true,
    },


    authors : [{
        type: Mongoose.Schema.Types.ObjectId,
        status: {type: String, enum: ["IN", "OUT"], default: "IN"},
        borrowedBy : {type: Mongoose.Schema.Types.ObjectId}
    }]


}, {timestamps: true});


const Model = mongoose.model("Book", ModelSchema)
export default Model;