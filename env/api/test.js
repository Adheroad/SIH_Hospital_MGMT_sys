// WSAVwVrQ5izVY01V

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get("/", (req, res)=>{
    res.send("ready? pakka");
});

console.log(process.env.MONGO_URI);

app.listen(2121, ()=>{
    console.log("Server started at 2121 ok?");
});