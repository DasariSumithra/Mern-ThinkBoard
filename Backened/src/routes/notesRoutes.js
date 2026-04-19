import express from "express";
import { getAllnotes } from "../controllers/notesController.js";
import { createNote } from "../controllers/notesController.js";
import { deleteNote } from "../controllers/notesController.js";
import { updateNote } from "../controllers/notesController.js";
import { getNoteByID } from "../controllers/notesController.js";

const router=express.Router();
export default router;

//read
router.get("/",getAllnotes);
router.get("/:id",getNoteByID)
//create
router.post("/",createNote)
//update
router.put("/:id",updateNote)
router.delete("/:id",deleteNote)

