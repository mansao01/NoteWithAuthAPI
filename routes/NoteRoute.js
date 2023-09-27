import express from "express";
import {verifyToken} from "../middleware/VerifyToken.js";
import {getNotesById,getNotes, createNote, updateNote, deleteNote} from "../controller/Note.js";

const router = express.Router();


router.get("/v1/notes/:userId", verifyToken, getNotesById)
router.get("/v1/notes", getNotes)
router.post("/v1/note", verifyToken, createNote)
router.delete("/v1/note", verifyToken, deleteNote)
router.patch("/v1/note", verifyToken, updateNote)// not tested yet

export default router;