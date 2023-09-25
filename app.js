import express from 'express';
import dotEnv from 'dotenv';

const app = express();

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log("Server start in " + PORT + " Port")
})