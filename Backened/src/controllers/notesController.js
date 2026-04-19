// export const getAllnotes=(req,res)=>{
//     res.send("you have notes to read");
// }

import Note from "../model/Note.js";


export async function getAllnotes(req,res){
    try{
        const notes=await Note.find().sort({createdAt: -1}) //newest first
        res.status(200).json(notes)
    }catch(error){
        console.error("error in getAllnotes controller",error);
        res.status(500).json({message : "Internal server error"})
    }
   // res.send("you have notes to read");
}

export async function getNoteByID(req,res){
    try{
        const notes=await Note.findById(req.params.id)
        if(!notes) return res.status(404).json({message: "Note not found"})
        res.status(200).json(notes)
    }catch(error){
        console.error("error in getNoteBYID controller",error);
        res.status(500).json({message : "Internal server error"})
    }
}

export async function createNote(req,res){
   // res.status(201).json({message : "note successfully created"});
    try{
        const {title,content}=req.body

        const newNote= new Note({title,content})
        await newNote.save()
    res.status(201).json({message : "note successfully created"})
    }
  catch(error){
        console.error("error getting when creating notes",error);
        res.status(500).json({message : "Internal server error"})
    }  
}
export async function updateNote(req,res){
    // res.status(200).json({message : "note successfully updated"});

    try{
       const {title,content}=req.body
     const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title ,content},
        {
            new: true,
        }
       );
       if(!updateNote) return res.status(404).json({message:"Note not found"});
       res.status(200).json({message:"note updated successfully"})
    }catch(error){
        console.error("error getting when updating notes",error);
        res.status(500).json({message : "Internal server error"})
    }
}
export async function deleteNote(req,res){
    try{
       const {title,content}=req.body
     const deletedNote=await Note.findByIdAndDelete(req.params.id,{title ,content},
        {
            new: true,
        }
       );
       if(!deletedNote) return res.status(404).json({message:"Note not found"});
       res.status(200).json({message:"note deleted successfully"})
    }catch(error){
        console.error("error getting when deleting notes",error);
        res.status(500).json({message : "Internal server error"})
    }
}