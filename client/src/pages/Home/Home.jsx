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
    <div className={styles.recipecontainer}>
        <div className={styles.heading}>
          <h1>Where your Recipes come to Life</h1>
          <h4>Savour Every Bite, Save Every Recipe</h4>
        </div>
        <div>

        <h1 className={styles.maintitle}>Recipe Dish</h1>
        </div>

        <div className={styles.recipelist}>
        {recipes.map((recipe) => (
          <div className={styles.recipegroup}>
                <div className={styles.topsection}>
                  <h2 className={styles.recipename} key={recipe._id}>{recipe.name}</h2>
                  <button
                    onClick={() => saveRecipe(recipe._id)}
                    disabled={isRecipeSaved(recipe._id)}
                    className={styles.saverecipebtn}
                  >
                      {isRecipeSaved(recipe._id)? "Saved" : "Save" }
                  </button>
                </div>
                  <p>{recipe.descriptions}</p>
                  <p> <strong>Instructions:  </strong>{recipe.instructions}</p>
                  <img className={styles.recipeimage} src={recipe.imageUrl} alt={recipe.name}/>
                <p><strong>Cooking Time: </strong>{recipe.cookingTime} (mins)</p>
          </div>
              ))}
        </div>
    </div>
  );
}

export default Home
