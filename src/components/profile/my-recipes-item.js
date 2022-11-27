import React from "react";
import {useLocation} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {deleteMyRecipe} from "../../reducers/my-recipes-reducer";
import "./index.css";

const MyRecipesItem = ({recipe}) => {
    let loggedIn = useSelector(state => state.profile);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let isMyRecipes = paths.includes(loggedIn._id);

    const dispatch = useDispatch();
    const deleteRecipeHandler = (id) => {
        dispatch(deleteMyRecipe(id));
    }

    return (
        <>
        {
            (recipe.privacy === "PUBLIC" || isMyRecipes) &&
            <div className="m-3 p-2 wd-my-recipe-content">
                <div className="row d-flex align-items-center ps-2 pe-2">
                    <span className="col-2">{recipe.privacy}</span>
                    <div className="col-5 d-flex justify-content-end">
                        <div className="btn d-block d-xl-none"
                             onClick={() => deleteRecipeHandler(recipe._id)}>
                            <i className="bi bi-trash p-2 text-dark wd-text-xs"></i>
                            <span className="wd-text-xs">Delete Recipe</span>
                        </div>
                        <div className="btn d-none d-xl-block"
                             onClick={() => deleteRecipeHandler(recipe._id)}>
                            <i className="bi bi-trash text-dark p-2"></i>
                            <span className="wd-text-md">Delete Recipe</span>
                        </div>
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        <div className="btn d-block d-xl-none">
                            <Link to={`./${recipe._id}/details`} className="wd-no-decor">
                                <i className="fa-solid fa-utensils text-dark p-2 wd-text-xs"></i>
                                <span className="wd-text-xs">Open Recipe</span>
                            </Link>
                        </div>
                        <div className="btn d-none d-xl-block">
                            <Link to={`./${recipe._id}/details`} className="wd-no-decor">
                                <i className="fa-solid fa-utensils text-dark p-2"></i>
                                <span className="wd-text-md">Open Recipe</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="wd-inner-content row m-1 d-flex align-items-center">
                    <div className="col-4 p-2">
                        <img className="wd-my-recipe-image" src={`/images/${recipe.recipePic}`} alt="avatar"/>
                    </div>
                    <div className="col-7">
                        <div className="p-2 row">
                            <div className="col-9">
                                <div>
                                    <span className="text-dark fw-bolder">{recipe.dishName} </span>
                                </div>
                                <span className="text-dark d-none d-md-block">Prep Time: {recipe.prepTime}</span>
                                <span className="text-dark d-none d-md-block">Cook Time: {recipe.cookTime}</span>
                                <span className="text-dark d-none d-md-block">
                    Total Time: {parseInt(recipe.prepTime) + parseInt(recipe.cookTime)} mins</span>
                                <span className="text-dark d-none d-md-block">Servings: {recipe.servings}</span>
                                <span className="text-dark d-none d-md-block">Difficulty: {recipe.difficulty}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}
export default MyRecipesItem;