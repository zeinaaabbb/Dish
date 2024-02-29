import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express()

//middleware
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.)

app.listen(3001, () => console.log("SERVER STARTED!"));
