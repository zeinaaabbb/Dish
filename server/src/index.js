import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { userRouter } from './routes/users.js'
import { recipesRouter } from './routes/recipes.js'

dotenv.config();

const app = express()

//middleware
app.use(express.json());
app.use(cors());

// Route handling for user-related and recipe-related routes
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);


// MongoDB connection
// console.log(process.env.mongoDB);
mongoose.connect(process.env.mongoDB);

app.listen(3001, () => console.log("SERVER STARTED!"));
