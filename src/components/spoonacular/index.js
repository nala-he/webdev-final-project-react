import React from "react";
import {useSelector} from "react-redux";
import RecipeItem from "./recipe-item";

// HARDCODE RECIPE TO AVOID UNNECESSARY CALLS TO SPOONACULAR API --------------------------REMOVE ONCE COMPLETE
import recipes from "./recipes.json";

const SearchByIngredientsResults = () => {
    // HARDCODE RECIPE TO AVOID UNNECESSARY CALLS TO SPOONACULAR API -------------------------- UNCOMMENT OUT ONCE COMPLETE
    //const {recipes} = useSelector(state => state.spoonacular);

    return (
        <div className="m-3 mb-0 wd-border">
            {
                recipes && recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)
            }

        </div>
    );
};
export default SearchByIngredientsResults;