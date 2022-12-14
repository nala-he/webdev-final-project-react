import React, {useEffect} from "react";
import {useLocation} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { deleteRecipeThunk } from "../../services/recipes-thunk";
import "./index.css";
import {findUsersIamFollowingThunk} from "../../services/friends-thunks";
import * as service from "../../services/saved-recipes-service";
import {findSavedRecipesByUserThunk} from "../../services/saved-recipes-thunk";

const MyRecipesItem = ({recipe}) => {
    let friend = useSelector(state => state.friendProfile);
    let {currentUser} = useSelector(state => state.usersData);
    let uid;
    if (currentUser) {
        uid = currentUser._id;
    }
    const {following} = useSelector(state => state.followsData);
    const followingList = following.map(friend => friend.following._id);
    // console.log(followingList);
    const {pathname} = useLocation();
    const paths = pathname.split('/');

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            uid = currentUser._id;
            dispatch(findUsersIamFollowingThunk(uid));
        }
    }, [currentUser, dispatch]);

    let isFollowing;
    let notFollowingPublic;
    if (paths.includes('friends')) {
        const friendId = paths[3];
        isFollowing = followingList.includes(friendId);
        // console.log(isFollowing);
        notFollowingPublic = !followingList.includes(friendId) && (recipe.privacy === 'PUBLIC');
    }
    let isMyRecipes = !paths.includes('friends');

    //let isMyRecipes = !paths.includes(friend._id);
    const me = (paths[1] === 'profile') && (!paths.includes('friends'));

    const deleteRecipeHandler = async (id) => {
        // remove all saved recipes that exist in database associated to recipe to be deleted
        const recipes = await service.findSavedRecipesByRecipe(id);
        await Promise.all(recipes.map(recipe => service.deleteSavedRecipe(recipe._id)));

        // dispatch saved recipes again to update reducer
        dispatch(findSavedRecipesByUserThunk(currentUser._id));

        // delete recipe
        dispatch(deleteRecipeThunk(id));
    }

    return (
        <>
        {
            recipe && (isFollowing || isMyRecipes || notFollowingPublic) &&
            // recipe && (recipe.privacy === "PUBLIC" || isMyRecipes) &&
            <div className="m-3 p-2 wd-my-recipe-content">
                <div className="row d-flex align-items-center ps-2 pe-2">
                    <span className="col-2">{recipe.privacy}</span>
                    <div className="col-5 d-flex justify-content-end">
                        {
                            me && isMyRecipes &&
                            <>
                                <div className="btn d-block d-xl-none"
                                     onClick={() => deleteRecipeHandler(recipe._id)}>
                                    <i className="bi bi-trash p-2 text-dark wd-text-xs"></i>
                                    <span className="wd-text-xs">Delete Recipe</span>
                                </div>
                                <div className="btn d-none d-xl-block"
                                     onClick={() => deleteRecipeHandler(recipe._id)}>
                                    <i className="bi bi-trash text-dark p-2"></i>
                                    <span className="text-dark">Delete Recipe</span>
                                </div>
                            </>
                        }

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
                                <span className="text-dark">Open Recipe</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="wd-inner-content row m-1 d-flex align-items-center">
                    <div className="col-4 p-2">
                        {
                        (!recipe.recipePic) &&
                        <img className="wd-my-recipe-image"
                            alt="recipePic" src={`/images/emptyRecipe.jpg`}/>
                        }
                        {
                            recipe.recipePic && recipe.recipePic.includes("http") &&
                            <img className="wd-my-recipe-image"
                                src={recipe.recipePic} alt="recipePic"/>
                        }
                        {
                            recipe.recipePic && !recipe.recipePic.includes("http") &&
                            <img className="wd-my-recipe-image"
                                src={`/images/${recipe.recipePic}`} alt="recipePic"/>
                        }
                    </div>
                    <div className="col-7">
                        <div className="p-2 row">
                            <div className="col-9">
                                <div>
                                    <span className="text-dark fw-bolder">{recipe.dishName} </span>
                                </div>
                                {
                                    recipe && recipe.intro &&                               
                                    <span className="text-dark">{recipe.intro.substring(0,53)} </span>
                                }
                                <span className="text-dark d-none d-md-block">
                    Total Time: {recipe.totalTime}</span>
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