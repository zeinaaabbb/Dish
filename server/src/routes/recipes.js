import express from 'express'
import mongoose from 'mongoose';

import { RecipeModel} from "../models/Recipes.js";
import { UserModel} from "../models/Users.js";

const router = express.Router();

router.get("/", async(req, res) => {
  try {
    const response = await RecipeModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async(req, res) => {
  const recipe = new RecipeModel(req.body);
  try {
    const response = await recipe.save();
    res.json(response)
  } catch (err) {
    res.json(err);
  }
});

router.post("/createrecipe", async(req, res) => {
  // console.log("request123456y", req.body);
  const recipe = new RecipeModel(req.body);
  try {
    const response = await recipe.save();
    console.log("me", response)
    res.json(response)
    // send back to /recipes
  } catch (err) {
    res.json(err);
  }
});


router.put("/", async(req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.body.recipeID)
    const user = await UserModel.findById(req.body.userID)
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes })
  } catch (err) {
    res.json(err);
  }
});

router.get("/savedrecipes/ids/:userID", async(req,res) => {
  try {
    const user = await UserModel.findById(req.params.userID)
    res.json({ savedRecipes: user?.savedRecipes })
  } catch (err) {
    res.json(err);
  }
})

router.get("/savedrecipes/:userID", async(req,res) => {
  try {
    const user = await UserModel.findById(req.params.userID)
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user.savedRecipes },
    });
    res.json({ savedRecipes })
  } catch (err) {
    res.json(err);
  }
})


export { router as recipesRouter };
