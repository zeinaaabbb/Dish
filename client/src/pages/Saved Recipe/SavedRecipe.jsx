import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./SavedRecipe.module.css"
import { useGetUserID} from "../../hooks/useGetUserID"

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
    <div className={styles.recipecontainer}>
    <h1 className={styles.maintitle}>Saved recipes</h1>
    <div className={styles.recipelist}>
    {savedRecipes.map((recipe) => (
      <div className={styles.recipegroup}>
            <div className={styles.topsection}>
              <h2 className={styles.recipename} key={recipe._id}>{recipe.name}</h2>
            </div>
              <p>{recipe.descriptions}</p>
              <p> <strong>Instructions:  </strong>{recipe.instructions}</p>
              <img className={styles.recipeimage} src={recipe.imageUrl} alt={recipe.name}/>
            <p><strong>Cooking Time: </strong>{recipe.cookingTime} (mins)</p>
      </div>
          ))}
    </div>
</div>
)


}

export default SavedRecipe
