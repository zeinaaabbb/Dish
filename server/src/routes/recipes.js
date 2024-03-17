import express from 'express'
import mongoose from 'mongoose';

import { RecipeModel} from "../models/Recipes.js";

const router = express.Router();

router.get("/", async(res, req) => {
  try {
    const response = await RecipeModel.find({});
    res.json(response)
  } catch (error) {
    console.error(error);
  }
});





export { router as recipesRouter };
