import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import RecipeSummaryItem from "./recipe-summary-item";
import { findAllRecipesThunk } from "../../services/recipes-thunk";

const RecipeSummaryList = () => {
  const recipes = useSelector((state) => state.recipes)
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.usersData);

  useEffect(() => {
    dispatch(findAllRecipesThunk());
  }, [dispatch]);

  let recipesList = recipes.recipes.map(recipe =>
    <RecipeSummaryItem key={recipe._id} recipe={recipe}/> ).reverse()

  // if not logged in, only show private recipes
  if (!currentUser) {
    recipesList = recipesList.filter(recipe => recipe.props.recipe.privacy === "PUBLIC");
  }

  return(
    <div>
        <div className="position-relative m-3">
            <input placeholder="Search Recipes"
                    className="form-control rounded-pill ps-5 text-dark"/>
            <i className="bi bi-search position-absolute wd-nudge-up text-dark"></i>
        </div>
      {recipesList}
      {/* {
        recipes.recipes.map(recipe =>
          <RecipeSummaryItem key={recipe._id} recipe={recipe}/> ).reverse()
      } */}
    </div>
    );
   };
export default RecipeSummaryList;