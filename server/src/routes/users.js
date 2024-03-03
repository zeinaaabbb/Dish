import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from "../models/Users.js"

const router = express.Router();

//post request /register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // console.log("Received registration request:", { username, password });
  const user = await UserModel.findOne({ username });
  res.json(user);
});

//post request /login
router.post("/login");




export { router as userRouter };
