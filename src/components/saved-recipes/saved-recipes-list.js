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
    // console.log(savedRecipes);
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
                <span>Total Saved Recipes: {savedRecipes.length} FridgeRecipes 
                    + {savedSpoonaculars.length} Spoonacular recipes</span>
            </div>
            
            {
                savedRecipes 
                && <span>Saved Recipes</span> 
                && savedRecipes.map(each => 
                            <SavedRecipeItem key={each._id}
                                             recipe={each.recipe}
                                             recipeId={each._id}/>
                    ).reverse()
            }
            {
                savedSpoonaculars 
                && <span>Saved Spoonacular Recipes</span> 
                && savedSpoonaculars.map(spoon =>
                 <SpoonacularRecipeItem key={spoon} 
                                        recipe={spoon}/> ).reverse()
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