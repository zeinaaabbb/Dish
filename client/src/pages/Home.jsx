import { useState, useEffect } from "react";
import axios from "axios";
import { useGetUserID} from "../hooks/useGetUserID"

function Home() {

const userID = useGetUserID();

const [ recipes, setRecipes ] = useState([]);
const [ savedRecipes, setSavedRecipes ] = useState([]);

useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const result = await axios.get("http://localhost:3001/recipes");
        setRecipes(result.data);
        // console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchRecipe();

    const fetchSavedRecipe = async() => {
      try {
        const result = await axios.get(`http://localhost:3001/recipes/savedrecipes/ids/${userID}`, {
          userID
        });
        setSavedRecipes(result.data.saveRecipes);
        // console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchSavedRecipe();

});

const saveRecipe = async(recipeID) => {
  try {
    const result = await axios.put("http://localhost:3001/recipes", {
      userID,
      recipeID
    });
    // setSavedRecipes(result.data);
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
}


  return (
    <div>
        <h1>Recipes</h1>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>
            <div>
              <h1>{recipe.name}</h1>
              <button onClick={() =>{saveRecipe(recipe._id)}}>Save</button>
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
