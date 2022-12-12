import React from "react";
import IngredientName from "./spoonacular-ingredient-name";

const SpoonacularIngredientsList = ({ingredients}) => {
    return (
        <div className="p-3">
            <div className="fw-bold fs-5 text-dark">
                Ingredients
            </div>
            <ul className="text-dark mt-2">
                {
                    ingredients.map(ingredient => <IngredientName ingredient={ingredient.original}/>)
                }
            </ul>
        </div>
    );
};
export default SpoonacularIngredientsList;