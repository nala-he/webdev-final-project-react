import React from "react";
import IngredientItem from "./ingredient-item";
import "./index.css";

const IngredientsList = ({ingredients}) => {
    return (
        <div className="p-3">
            <div className="fw-bold fs-5 text-dark">
                Ingredients
            </div>
            <ul className="text-dark mt-2">
                {
                    ingredients.map(ingredient => <IngredientItem ingredient={ingredient}/>)
                }
            </ul>
        </div>
    );
};
export default IngredientsList;