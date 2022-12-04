import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import RecipeDetail from "./recipe-detail";
import recipes from "../../data/recipes.json";
import {useDispatch, useSelector} from "react-redux";
import {deleteSavedRecipeByUserAndRecipeIdThunk,} from "../../services/saved-recipes-thunk";

const RecipeDetailsComponent = () => {
    const {pathname} = useLocation();
    const {currentUser} = useSelector(state => state.usersData);
    const paths = pathname.split('/');
    const recipeId = paths[4];
    const dispatch = useDispatch();

    const deleteRecipeClickHandler = () => {
        dispatch(deleteSavedRecipeByUserAndRecipeIdThunk({uid: currentUser._id, rid: recipeId}));
    };

    return (
        <div className="m-3 mb-0 wd-border wd-bg-beige">
            {/* close button */}
            <div className="d-flex justify-content-end m-3 me-4">
                <Link to={`/users/${currentUser._id}/saved-recipes`}>
                    <i className="bi bi-x-square text-black fs-3"></i>
                </Link>
            </div>

            {/* recipe detail */}
            <div>
                {/* hardcode recipe - update later*/}
                <RecipeDetail recipe={recipes[0]}/>
            </div>

            <div className="d-flex justify-content-center">
                {/* delete button */}
                <Link to={`/users/${currentUser._id}/saved-recipes`}
                      className="text-decoration-none d-flex align-items-center"
                      onClick={deleteRecipeClickHandler}>
                    <i className="bi bi-trash text-black fs-3"></i>
                    <span className="fw-bold fs-5 ms-3 text-dark">
                        Delete Recipe
                    </span>
                </Link>
            </div>
        </div>
    );
};
export default RecipeDetailsComponent;