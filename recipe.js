import {useRef} from 'react';
function Recipe({ recipe }) {
    const recipeRef = useRef();
  
    return (
      <div className="recipe" ref={recipeRef}>
        <h3 className="recipe_title">{recipe.recipe.label}</h3>
        <ul className="recipe_ingredients">
          {recipe.recipe.ingredients.map((ingredient) => (
            <li >{ingredient.text}</li>
          ))}
        </ul>
        <img src={recipe.recipe.image} className="recipe_image" alt="" />
      </div>
    );
  }
  export default Recipe;