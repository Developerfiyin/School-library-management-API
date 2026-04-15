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


    authors : [{ type: mongoose.Schema.Types.ObjectId, "ref" : "Author" }],

    status: {type: String, enum: ["IN" | "OUT"], default: "IN"},
        
    borrowedBy : {type: mongoose.Schema.Types.ObjectId, "ref" : "Student", default: null},
    issuedBy : { type: mongoose.Schema.Types.ObjectId, "ref" : "Librarian", default : null}, 
   
    returnDate: {type: Date, default: null},
     
}, {timestamps: true});


const Model = mongoose.model("Book", ModelSchema)
export default Model;