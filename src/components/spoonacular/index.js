import React from "react";
import {useSelector} from "react-redux";
import RecipeItem from "./recipe-item";


const SearchByIngredientsResults = () => {
    const {recipes} = useSelector(state => state.spoonacular);

    return (
        <div className="m-3 mb-0 wd-border">
            {
                recipes && recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)
            }
        </div>
    );
};
export default SearchByIngredientsResults;