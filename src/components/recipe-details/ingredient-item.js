import React from "react";

const IngredientItem = ({ingredient}) => {
    console.log(ingredient);
    return (
        <li>
            {ingredient.name}
        </li>
    );
};
export default IngredientItem;