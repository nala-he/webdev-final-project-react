import React, {useEffect,useState} from "react";
import "./index.css";
import {Link, useNavigate} from "react-router-dom";
import {useLocation} from "react-router";
import {createSavedRecipeThunk} from "../../services/saved-recipes-thunk";
import {useDispatch, useSelector} from "react-redux";
import IngredientsList from "./ingredients-list";
import DirectionsList from "./directions-list";
import {findUserByIdThunk} from "../../services/users-thunks";
import {followUserThunk} from "../../services/friends-thunks";

const RecipeDetail = ({recipe}) => {
    const {currentUser} = useSelector(state => state.usersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(recipe);
    // console.log(recipe.authorId);

    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let savedOrMy;
    if (paths.includes("saved-recipes") || paths.includes("my-recipes")) {
        savedOrMy = true;
    }
    useEffect(() => {
        try {
            if (currentUser) {
              dispatch(findUserByIdThunk(currentUser._id));
            }
            // console.log(recipes);
        }
        catch(e) {
            // navigate('/login');
        }
        // console.log(recipes)
    }, [currentUser, dispatch,navigate]);

    const saveRecipeClickHandler = () => {
        if (currentUser) {
            const uid = currentUser._id;
            dispatch(createSavedRecipeThunk({uid, rid: recipe._id}))
                .then(navigate(`/users/${uid}/saved-recipes`));
        } else {
            navigate('/login');
        }
    };

    const followClickHandler = (authorId) => {
        if (currentUser) {
            dispatch(followUserThunk(authorId))
                .then(navigate(`/profile`));
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="m-3 wd-border h-100 bg-white">
            {/* author and dish title */}
            <div className="m-4 mb-3 d-flex justify-content-start align-items-center">
                {/* author avatar */}
                <div>
                    {
                        (!recipe.avatar) &&
                        <img className="wd-author-avatar"
                                src={`/images/emptyAvatar.png`} alt="avatar"/>
                    }
                    {
                        recipe.avatar && recipe.avatar.includes("http") &&
                        <img className="wd-author-avatar"
                                src={recipe.avatar} alt="avatar"/>
                    }
                    {
                        recipe.avatar && !recipe.avatar.includes("http") &&
                        <img className="wd-author-avatar"
                                alt="avatar"
                                src={recipe.avatar !== '' ? `/images/${recipe.avatar}`
                                                        : `/images/emptyAvatar.png`}/>
                    }
                </div>
                {/* dish title and author name */}
                <div className="text-dark ms-5">
                    <div className="fs-2 fw-bold text-wrap">
                        {recipe.dishName}
                    </div>
                    <div className="fs-6 text-wrap">
                        Created By: {recipe.authorName}
                    </div>
                </div>
            </div>

            {/* recipe pic and recipe summary/times */}
            <div className="d-flex align-items-center justify-content-center flex-wrap">
                {/* recipe pic */}
                <div className="m-2">
                    {
                        (!recipe.recipePic) &&
                        <img className="wd-recipe-pic"
                            alt="recipePic" src={`/images/emptyRecipe.jpg`}/>
                    }
                    {
                        recipe.recipePic && recipe.recipePic.includes("http") &&
                        <img className="wd-recipe-pic"
                            src={recipe.recipePic} alt="recipePic"/>
                    }
                    {
                        recipe.recipePic && !recipe.recipePic.includes("http") &&
                        <img className="wd-recipe-pic"
                            src={`/images/${recipe.recipePic}`} alt="recipePic"/>
                    }
                </div>
                {/* recipe summary/times */}
                <div className="m-2">
                    <div className="wd-border text-dark wd-width-305">
                        <ul className="mt-3">
                            <li className="list-group-item">
                                <span className="fw-bold">Prep Time: </span>{recipe.prepTime}<br/>
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Cook Time: </span>{recipe.cookTime}<br/>
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Total Time: </span>{recipe.totalTime}<br/>
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Servings: </span>{recipe.servings}<br/>
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Difficulty: </span>{recipe.difficulty}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ingredients */}
            <div className="row wd-border m-4 mt-3">
                <IngredientsList/>
            </div>

            {/* directions */}
            <div className="row wd-border m-4">
                <DirectionsList/>
            </div>

            {/* nutritional facts */}
            <div className="row wd-border m-4">
                <div className="p-3">
                    <div className="fs-5 text-dark">
                        <span className="fw-bold">Nutritional Facts </span>(per serving)
                    </div>
                    <div className="mt-3 fs-6 text-dark">
                        <span className="fw-bold">Calories: </span>{recipe.calories}<br/>
                        <span className="fw-bold">Fat: </span>{recipe.fat}<br/>
                        <span className="fw-bold">Carbs: </span>{recipe.carbs}<br/>
                        <span className="fw-bold">Protein: </span>{recipe.protein}
                    </div>
                </div>
            </div>

            {/* Save Recipe & cancel button */}
            {!savedOrMy && currentUser &&
            <div className="row justify-content-evenly mb-2">
                <button
                onClick={saveRecipeClickHandler}
                    className="col-3 btn btn-sm btn-secondary m-2">
                    Save Recipe
                </button>
                <button
                    onClick={() => followClickHandler(recipe.authorId)}
                    className="col-3 btn btn-sm btn-secondary m-2">
                    Follow Author
                </button>
                <Link to="/home"
                      className="col-3 btn btn-sm btn-secondary m-2">
                    Close
                </Link>
            </div>
            }
            {/* if not logged in */}
            {!currentUser &&
            <div className="row justify-content-evenly mb-2">
                <Link to="/home"
                      className="col-3 btn btn-sm btn-secondary m-2">
                    Close
                </Link>
            </div>
            }
        </div>
    );
};
export default RecipeDetail;