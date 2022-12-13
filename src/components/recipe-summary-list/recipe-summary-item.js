import React from "react"
import "./index.css"
import {createSavedRecipeThunk} from "../../services/saved-recipes-thunk";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {followUserThunk} from "../../services/friends-thunks";

const RecipeSummaryItem = (
    {
    recipe = {
        "dishName": "Mashed Potato",
        "avatar": "avatar.png",
        "author": "@cook",
        "recipePic": "mashedPotato.jpg",
        "intro": "Mashed potato recipe"
        }
    }
    
) => {
    const {currentUser} = useSelector(state => state.usersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveRecipeClickHandler = () => {
        if (currentUser) {
            const uid = currentUser._id;
            dispatch(createSavedRecipeThunk({uid, rid: recipe._id}))
                .then(navigate(`/users/${uid}/saved-recipes`));
        } else {
            navigate('/login');
        }
    };

    const followClickHandler = (friendId) => {
        if (currentUser) {
            dispatch(followUserThunk(friendId))
                .then(navigate(`/profile`));
        } else {
            navigate('/login');
        }
    };

    return(
    <div className="wd-item-border m-4 p-3 row">
        <div className="col-2 p-2">
            {/* <img className="wd-avatar" src={recipe.avatar} alt="avatar"/> */}
            {
                (!recipe.avatar) &&
                <img className="wd-avatar"
                        src={`/images/emptyAvatar.png`} alt="avatar"/>
            }
            {
                recipe.avatar && recipe.avatar.includes("http") &&
                <img className="wd-avatar"
                        src={recipe.avatar} alt="avatar"/>
            }
            {
                recipe.avatar && !recipe.avatar.includes("http") &&
                <img className="wd-avatar"
                        alt="avatar"
                        src={recipe.avatar !== '' ? `/images/${recipe.avatar}`
                                                : `/images/emptyAvatar.png`}/>
            }
        </div>
        <div className="col-10 ">
            <div className="p-3 wd-item-content">
                <div>
                    <span className="text-dark fw-bolder">{recipe.dishName} </span>
                    <span className="col text-muted"> @{recipe.authorName} </span>
                </div>
                <span className="text-dark wd-wrap">{recipe.intro}</span>
                <div className="d-flex justify-content-center">
                    {
                        (!recipe.recipePic) &&
                        <img className="wd-recipe-image mt-2 d-none d-md-block"
                            alt="recipePic" src={`/images/emptyRecipe.jpg`}/>
                    }
                    {
                        recipe.recipePic && recipe.recipePic.includes("http") &&
                        <img className="wd-recipe-image mt-2 d-none d-md-block"
                            src={recipe.recipePic} alt="recipePic"/>
                    }
                    {
                        recipe.recipePic && !recipe.recipePic.includes("http") &&
                        <img className="wd-recipe-image mt-2 d-none d-md-block"
                            src={`/images/${recipe.recipePic}`} alt="recipePic"/>
                    }
                    {/* <img className="wd-recipe-image mt-2 d-none d-md-block"
                         src={`/images/${recipe.recipePic}`} alt="recipePic"/> */}
                </div>
            </div>
            <div className="row">
                <div className="btn col-4 text-dark"
                     onClick={saveRecipeClickHandler}>
                    <div className="d-block d-xl-none">
                        <i className="bi bi-bookmark text-dark p-2"></i>
                        <span className="wd-text-md">Save Recipe</span>
                    </div>
                    <div className="d-none d-xl-block">
                        <i className="bi bi-bookmark text-dark p-2"></i>
                        <span>Save Recipe</span>
                    </div>
                </div>
                <div className="btn col-4 text-dark">
                    <Link className="wd-link" to={`/recipes/${recipe._id}/details`}>
                        <div className="d-block d-xl-none">
                            <i className="fa-solid fa-utensils text-dark p-2"></i>
                            <span className="wd-text-md">Open Recipe</span>
                        </div>
                        <div className="d-none d-xl-block">
                            <i className="fa-solid fa-utensils text-dark p-2"></i>
                            <span className="text-dark">Open Recipe</span>
                        </div>
                    </Link>
                </div>
                <div className="btn col-4 text-dark"
                     onClick={() => followClickHandler(recipe.authorId)}>
                    <div className="d-block d-xl-none">
                        <i className="bi bi-check-square text-dark p-2"></i>
                        <span className="wd-text-md">Follow Author</span>
                    </div>
                    <div className="d-none d-xl-block">
                        <i className="bi bi-check-square text-dark p-2"></i>
                        <span>Follow Author</span>
                    </div>
                </div>
            </div> 
        </div>

    </div>    
    );
}
export default RecipeSummaryItem;