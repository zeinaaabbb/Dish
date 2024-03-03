import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRouter } from './routes/users.js'

dotenv.config();

const app = express()

//middleware
app.use(express.json());
app.use(cors());

// Route handling for user-related routes
app.use("/auth", userRouter);

// MongoDB connection
// console.log(process.env.mongoDB);
mongoose.connect(process.env.mongoDB);

app.listen(3001, () => console.log("SERVER STARTED!"));
