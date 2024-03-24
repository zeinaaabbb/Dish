import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGetUserID} from "../hooks/useGetUserID"

function SavedRecipe() {

const userID = useGetUserID();
const [ savedRecipes, setSavedRecipes ] = useState([]);

useEffect(() => {
    const fetchSavedRecipes = async() => {
      try {
        const result = await axios.get(`http://localhost:3001/recipes/savedrecipes/${userID}`);
        setSavedRecipes(result.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }};
    fetchSavedRecipes();
}, []);


  return (
    <div>
        <h1>Saved Recipes</h1>
        <ul>
          {savedRecipes.map((recipe) => (
            <li key={recipe._id}>
            <div>
              <h1>{recipe.name}</h1>
            </div>
            <div>
              <p> {recipe.descriptions}</p>
            </div>
            <div>
            <p> {recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name}/>
            <p>Cooking Time: {recipe.cookingTime} (mins)</p>
            </li>
          ))}
          </ul>
      </div>
  );
}

export default SavedRecipe
