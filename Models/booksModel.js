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
        type: Mongoose.Schema.Types.ObjectId, "ref" : "author" }],
        status: {type: String, enum: ["IN", "OUT"], default: "IN"},
        

        borrowedBy : {type: Mongoose.Schema.Types.ObjectId, "ref" : "student"},
        issuedBy : { type: Mongoose.Schema.Types.ObjectId, "ref" : "librarian"}, 
   
       returnDate: {type: Date, default: null},
     







       

}, {timestamps: true});


const Model = mongoose.model("Book", ModelSchema)
export default Model;