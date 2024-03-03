import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from "../models/Users.js"

const router = express.Router();

//post request - registration endpoint
router.post("/register", async (req, res) => {
  //Request Body Extraction:
  const { username, password } = req.body;
  // console.log("Received registration request:", { username, password });
  const user = await UserModel.findOne({ username });
  //Check if User Exists
  if (user) {
    return res.json({message: "User already exists!"});
  }
  //Hash Password:
  const hashedPassword = await bcrypt.hash(password, 10);
  //Create New User Instance:
  const newUser = new UserModel({username, password: hashedPassword});
  //Save User to Database:
  await newUser.save();
  res.json({message: "User Registered Successfully"});
});

//post request /login
router.post("/login");




export { router as userRouter };
