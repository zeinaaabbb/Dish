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
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({message: "User does not exists!"});
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({message: "Username or Password Is Invalid"});
  }

  const jwtSecret = process.env.JWT_SECRET
  const token = jwt.sign({ id: user._id }, jwtSecret);
  res.json({ token, userID: user._id })
});




export { router as userRouter };
