import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css"
import { useGetUserID} from "../../hooks/useGetUserID"

function Home() {

const userID = useGetUserID();

const [ recipes, setRecipes ] = useState([]);
const [ savedRecipes, setSavedRecipes ] = useState([]);

useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const result = await axios.get("http://localhost:3001/recipes");
        setRecipes(result.data);
      } catch (err) {
        console.log(err);
      }
    }


    const fetchSavedRecipes = async() => {
      try {
        const result = await axios.get(`http://localhost:3001/recipes/savedrecipes/ids/${userID}`);
        setSavedRecipes(result.data.saveRecipes);
      } catch (err) {
        console.log(err);
      }};

    fetchRecipes();
    fetchSavedRecipes();
}, []);

const saveRecipe = async(recipeID) => {
  try {
    const result = await axios.put("http://localhost:3001/recipes", {
      userID,
      recipeID
    });
    setSavedRecipes(result.data.savedRecipes);
  } catch (err) {
    console.log(err);
  }

}
const isRecipeSaved = (id) => savedRecipes && savedRecipes.includes(id);


  return (
    <div>
        <h1>Recipes</h1>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>
            <div>
              <h1>{recipe.name}</h1>
              <button
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                  {isRecipeSaved(recipe._id)? "Saved" : "Save" }
              </button>
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

export default Home
