import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import RecipeSummaryItem from "./recipe-summary-item";

const RecipeSummaryList = () => {
  const recipes = useSelector((state) => state.recipes)

  return(
    <div>
        <div className="position-relative m-3">
            <input placeholder="Search Recipes"
                    className="form-control rounded-pill ps-5 text-dark"/>
            <i className="bi bi-search position-absolute wd-nudge-up text-dark"></i>
        </div>
      {
        recipes.map(recipe =>
          <RecipeSummaryItem key={recipe._id} recipe={recipe}/> )
      }
    </div>
    );
   };
export default RecipeSummaryList;