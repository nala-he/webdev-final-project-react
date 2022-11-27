import React from "react";
import SavedRecipesList from "../saved-recipes/saved-recipes-list"
import "./index.css"

const SavedRecipes = () => {
    return (
        <div className="m-3 wd-border">
            <SavedRecipesList/>
        </div>
    );
};
export default SavedRecipes;