import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express()

//middleware
app.use(express.json());
app.use(cors());

// console.log(process.env.mongoDB);
mongoose.connect(process.env.mongoDB);

app.listen(3001, () => console.log("SERVER STARTED!"));
