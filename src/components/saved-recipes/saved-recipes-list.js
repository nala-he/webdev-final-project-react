import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SavedRecipeItem from "./saved-recipe-item";
import {findSavedRecipesByUserThunk} from "../../services/saved-recipes-thunk";

const SavedRecipesList = () => {
    const {savedRecipes} = useSelector((state) => state.savedRecipes)
    const dispatch = useDispatch();
    // HARDCODED CURRENTLY LOGGED IN USER FOR TESTING ------- UPDATE ONCE PROFILE IMPLEMENTED ----------------------------------------------
    const uid = "638624632cf03e49f0977571";

    useEffect(() => {
        dispatch(findSavedRecipesByUserThunk(uid));
    }, [])

    return(
        <div>
            <div className="position-relative m-3">
                <input placeholder="Search Recipes"
                        className="form-control rounded-pill ps-5 text-dark"/>
                <i className="bi bi-search position-absolute wd-nudge-up text-dark"></i>
            </div>
            <div className="ms-4 text-dark fw-bold">
                <span>Total Saved Recipes: {savedRecipes.length}</span>
            </div>
            {
                savedRecipes && savedRecipes.map(recipe =>
                <SavedRecipeItem key={recipe._id} recipe={recipe.recipe} recipeId={recipe._id}/> )
            }
            {
                !savedRecipes &&
                <div className="d-flex justify-content-center mt-5">
                    <h4>Sorry, no saved recipes</h4>
                </div>
            }
        </div>
    );
};
export default SavedRecipesList;