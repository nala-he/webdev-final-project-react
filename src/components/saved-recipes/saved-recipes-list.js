import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SavedRecipeItem from "./saved-recipe-item";
import {findSavedRecipesByUserThunk, findSavedSpoonacularRecipesByUserThunk}
    from "../../services/saved-recipes-thunk";
import {useNavigate} from "react-router";
import {SpoonacularRecipeItem} from "./spoonacular-recipe-item";

const SavedRecipesList = () => {
    const {savedRecipes, savedSpoonaculars} = useSelector((state) => state.savedRecipes);
    const {currentUser} = useSelector(state => state.usersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const uid = currentUser._id;

    useEffect(() => {
        if (currentUser) {
            dispatch(findSavedRecipesByUserThunk(uid));
            dispatch(findSavedSpoonacularRecipesByUserThunk(uid));
        } else {
            navigate('/login');
        }
    }, [uid])

    return(
        <div>
            <div className="mt-3 ms-4 text-dark fw-bold">
                <span>Total Saved Recipes: {savedRecipes.length + savedSpoonaculars.length}</span>
            </div>
            {
                savedRecipes && savedRecipes.map(recipe => {
                <>
                    <span>Saved Recipes from FridgeRecipe</span>
                    <SavedRecipeItem key={recipe._id} recipe={recipe.recipe} recipeId={recipe._id}/> ).reverse()
                </>})
            }
            {
                savedSpoonaculars && savedSpoonaculars.map(recipe => {
                    
                                  
                 <>
                     <span>Saved Recipes from Spoonacular</span>
                     <SpoonacularRecipeItem key={recipe} recipe={recipe}/> ).reverse()
                 </>})
            }
            {
                !savedRecipes && !savedSpoonaculars &&
                <div className="d-flex justify-content-center mt-5">
                    <h4>Sorry, no saved recipes</h4>
                </div>
            }
        </div>
    );
};
export default SavedRecipesList;