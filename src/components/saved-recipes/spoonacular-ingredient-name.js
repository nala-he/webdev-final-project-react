import React from "react";

const SpoonacularIngredientName = ({ingredient}) => {
    // console.log(ingredient);
    return (
        <>
            <li>
                {ingredient.name}
            </li>
        </>
        
    );
};
export default SpoonacularIngredientName;