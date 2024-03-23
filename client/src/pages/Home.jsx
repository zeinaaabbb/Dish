import { useState, useEffect } from "react";
import axios from "axios";

function Home() {

const [ recipes, setRecipes ] = useState([]);

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

});


  return (
    <div>
        <h1>Recipes</h1>
        <ul>
          {recipes.map((recipe) => (
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
          ))};
          </ul>
      </div>
  );
}

export default Home
