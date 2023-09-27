import express from "express";
import {verifyToken} from "../middleware/VerifyToken.js";
import {getNotesById} from "../controller/Note.js";

const router = express.Router();


router.get("/v1/note/:userId", verifyToken, getNotesById)

export default router;