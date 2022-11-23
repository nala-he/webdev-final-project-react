import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SavedRecipeItem from "./saved-recipe-item";

const SavedRecipesList = () => {
  const recipes = useSelector((state) => state.recipes)

  return(
    <div>
        <div className="position-relative m-3">
            <input placeholder="Search Recipes"
                    className="form-control rounded-pill ps-5 text-dark"/>
            <i className="bi bi-search position-absolute wd-nudge-up text-dark"></i>
        </div>
        <div className="ms-4 text-dark fw-bold">
            <span>Total Saved Recipes: 3</span>
        </div>
      {
        recipes.map(recipe =>
          <SavedRecipeItem key={recipe._id} recipe={recipe}/> )
      }
    </div>
    );
   };
export default SavedRecipesList;