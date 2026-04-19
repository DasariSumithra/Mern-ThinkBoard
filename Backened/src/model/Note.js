import mongoose from "mongoose";

//1 create schema
//2 model based off the schema

const noteschema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: {
         type: String,
        required: true
    }

},
{
    timestamps: true }
);

const Note= mongoose.model("Note",noteschema)

export default Note