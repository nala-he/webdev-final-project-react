import React, {useEffect} from "react";
import "./index.css";
import IngredientsList from "./spoonacular-ingredients-list";
import DirectionsList from "../spoonacular/directions-list";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findRecipeInfoByIdThunk} from "../../services/spoonacular-thunks";
import {Link} from "react-router-dom";
import {deleteSavedRecipeThunk} from "../../services/saved-recipes-thunk";

export const SpoonacularRecipeItem = ({recipe}) => {
    // console.log(recipe);
    
    const {currentUser} = useSelector(state => state.usersData);
    const {targetRecipe} = useSelector(state => state.spoonacular);
    const uid = currentUser._id;
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(findRecipeInfoByIdThunk(recipe.spoonacularRecipe));
    },[])
    
    const deleteButtonClickHandler = () => {
        dispatch(deleteSavedRecipeThunk(recipe._id));
    };
    
    return(
        <div className="wd-saved-item-border m-4 p-2 row">
            <div className="col-3 col-sm-3 col-md-2 col-lg-2 p-2">
                <img className="wd-avatar"
                     src="/images/spoonacular.png" alt="avatar"/>
            </div>
            {
                targetRecipe && 
                <>
                    <div className="col-9 col-sm-9 col-md-10 col-lg-10">
                        <div className="p-2 row wd-saved-item-content">
                            <div className="col-9">
                                <div>
                                    <span className="text-dark fw-bolder">{targetRecipe.title} </span>
                                    <span className="col text-muted"> @{targetRecipe.sourceName} </span>
                                </div>
                                <span className="text-dark d-none d-md-block text-wrap text-break">{targetRecipe.intro}</span>
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <img className="wd-saved-recipe-image m-2 d-none d-md-block"
                                     alt="recipePic" src={targetRecipe.image}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="btn col-6 text-dark">
                                {/* xs, sm*/}
                                <div className="wd-btn-align d-md-none"
                                     onClick={deleteButtonClickHandler}>
                                    <i className="bi bi-trash text-dark p-2"></i>
                                </div>
                                {/* medium-large */}
                                <div className="wd-btn-align d-none d-md-block d-xl-none"
                                     onClick={deleteButtonClickHandler}>
                                    <i className="bi bi-trash text-dark p-2"></i>
                                    <span className="wd-text-md">Delete Recipe</span>
                                </div>
                                {/* x-large */}
                                <div className="wd-btn-align d-none d-xl-block"
                                     onClick={deleteButtonClickHandler}>
                                    <i className="bi bi-trash text-dark p-2"></i>
                                    <span>Delete Recipe</span>
                                </div>
                            </div>
                            <div className="btn col-6 text-dark">
                                {/* xs , sm */}
                                <Link to={`/users/${uid}/saved-spoonaculars/${targetRecipe.id}/details`}
                                      className="wd-btn-align d-md-none text-decoration-none text-dark">
                                    <i className="fa-solid fa-utensils text-dark p-2"></i>
                                </Link>
                                {/* md-l */}
                                <Link to={`/users/${uid}/saved-spoonaculars/${targetRecipe.id}/details`}
                                      className="wd-btn-align d-none d-md-block d-xl-none
                                     text-decoration-none text-dark">
                                    <i className="fa-solid fa-utensils text-dark p-2"></i>
                                    <span className="wd-text-md">Open Recipe</span>
                                </Link>
                                {/* xl */}
                                <Link to={`/users/${uid}/saved-spoonaculars/${targetRecipe.id}/details`}
                                      className="wd-btn-align d-none d-xl-block text-decoration-none text-dark">
                                    <i className="fa-solid fa-utensils text-dark p-2"></i>
                                    <span>Open Recipe</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};
