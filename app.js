import express from 'express';
import dotEnv from 'dotenv';
import db from './config/Database.js';
import UserModel from "./model/UserModel.js";
import NoteModel from "./model/NoteModel.js";
import UserRoute from './routes/UserRoute.js';
import NoteRoute from './routes/NoteRoute.js';
dotEnv.config()
const app = express();

try {
    await db.authenticate()
    console.log("Database connected")
    // await db.sync()
}catch (e) {
    console.log(e)
}

app.use(express.json())
app.use(UserRoute)
app.use(NoteRoute)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log("Server start in " + PORT + " Port")
})