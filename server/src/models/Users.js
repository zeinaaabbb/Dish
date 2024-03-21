import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  savedRecipes: [{type: mongoose.Schema.Types.ObjectID, ref: "recipes"}]
});

//Create and then export the UserModel using the UserSchema
export const UserModel = mongoose.model("users" , UserSchema);
