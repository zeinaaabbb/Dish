import React, { useState } from "react";

function CreateRecipe() {

  const [recipe, setRecipe] = useState({
    name : "",
    description: "" ,
    ingredients: [],
    instruction: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log("Name:", name);
    // console.log("Value:", value);
    setRecipe({ ...recipe, [name]: value });
  };

  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  }

  const handleIngredientChange = (event, index) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = event.target.value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  // console.log(recipe);

  return (
    <div className="create-recipe">
      <form>
        <h2>Create Your Recipe</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange}/>

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" onChange={handleChange}></textarea>

        <label htmlFor="ingredients">Ingredients:</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key ={index}
            type="text"
            name="ingredients"
            value ={ingredient}
            onChange={ (event) => handleIngredientChange(event, index) }
          />
        ))}
        <button type="button" onClick={handleAddIngredient}>+</button>

        <label htmlFor="instructions">Instructions:</label>
        <input type="text" name="instructions" id="instructions" onChange={handleChange}/>

        <label htmlFor="imageUrl">Image Url:</label>
        <input type="text" name="imageUrl" id="imageUrl" onChange={handleChange}/>

        <label htmlFor="cookingTime">Cooking Time:</label>
        <input type="number" name="cookingTime" id="cookingTime" onChange={handleChange}/>

        <button type="submit">create</button>
      </form>

    </div>
  );
}

export default CreateRecipe
