import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SavedRecipeItem from "./saved-recipe-item";
import {findSavedRecipesByUserThunk} from "../../services/saved-recipes-thunk";
import {useNavigate} from "react-router";

const SavedRecipesList = () => {
    const {savedRecipes} = useSelector((state) => state.savedRecipes);
    const {currentUser} = useSelector(state => state.usersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const uid = currentUser._id;

    useEffect(() => {
        if (currentUser) {
            dispatch(findSavedRecipesByUserThunk(uid));
        } else {
            navigate('/login');
        }
    }, [])

    return(
        <div>
            <div className="mt-3 ms-4 text-dark fw-bold">
                <span>Total Saved Recipes: {savedRecipes.length}</span>
            </div>
            {
                savedRecipes && savedRecipes.map(recipe =>
                <SavedRecipeItem key={recipe._id} recipe={recipe.recipe} recipeId={recipe._id}/> ).reverse()
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