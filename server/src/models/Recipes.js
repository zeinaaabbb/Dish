import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true}],
  instructions: { type: String, required: true },
  imageUrl: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  userOwner: { type: mongoose.SchemaType.ObjectId, ref: "users", required: true }
});

//Create and then export the UserModel using the UserSchema
export const UserModel = mongoose.model("recipes" , RecipeSchema);
