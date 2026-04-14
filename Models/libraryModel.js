import mongoose from "mongoose";

const {Schema} from moongose;

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