import mongoose from "mongoose";

const {Schema} = mongoose;

const librarySchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    staffId : {
        type: String,
        unique: true,
    },

}, {timestamps: true});


const Library = mongoose.model("Library", librarySchema);
export default Library;