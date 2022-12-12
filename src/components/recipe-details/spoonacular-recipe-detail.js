import React, {useEffect} from "react";
import "./index.css";
import IngredientsList from "./ingredients-list";
import DirectionsList from "./directions-list";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findRecipeInfoByIdThunk} from "../../services/spoonacular-thunks";
import {Link} from "react-router-dom";

const SpoonacularRecipeDetail = () => {
    const {targetRecipe} = useSelector(state => state.spoonacular);
    const {currentUser} = useSelector(state => state.usersData);
    
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const rid = paths[4];
    // console.log(rid);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findRecipeInfoByIdThunk(rid));
    },[rid])
    
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
                <div className="m-3 wd-border h-100 bg-white">
                    {/* dish title and source */}
                    <div className="m-4 mb-3 d-flex align-items-center justify-content-center">
                        <div className="text-dark text-center">
                            <div className="fs-2 fw-bold text-wrap">
                                {targetRecipe.title}
                            </div>
                            <div className="fs-6 text-wrap mt-2 text-center">
                                <span>Source: </span>
                                <a href={targetRecipe.sourceUrl} className="text-decoration-none text-dark">
                                    {targetRecipe.sourceUrl}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* recipe pic and recipe summary/times */}
                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                        {/* recipe pic */}
                        <div className="m-2">
                            <img src={`${targetRecipe.image}`}
                                 className="wd-recipe-pic" alt="recipe image"/>
                        </div>
                        {/* recipe summary/times */}
                        <div className="m-2">
                            <div className="wd-border text-dark wd-width-305">
                                <ul className="mt-3">
                                    {
                                        targetRecipe.preparationMinutes !== -1 &&
                                        <li className="list-group-item">
                                            <span className="fw-bold">Prep Time: </span>{targetRecipe.preparationMinutes} mins<br/>
                                        </li>
                                    }
                                    {
                                        targetRecipe.cookingMinutes !== -1 &&
                                        <li className="list-group-item">
                                            <span className="fw-bold">Cook Time: </span>{targetRecipe.cookingMinutes} mins<br/>
                                        </li>
                                    }
                                    {
                                        targetRecipe.readyInMinutes !== -1 &&
                                        <li className="list-group-item">
                                            <span className="fw-bold">Total Time: </span>{targetRecipe.readyInMinutes} mins<br/>
                                        </li>
                                    }
                                    {
                                        targetRecipe.servings !== -1 &&
                                        <li className="list-group-item">
                                            <span className="fw-bold">Servings: </span>{targetRecipe.servings}<br/>
                                        </li>
                                    }
                                    {
                                        targetRecipe.cuisines.length !== 0 &&
                                        <li className="list-group-item">
                                            <span className="fw-bold">Cuisines: </span>{targetRecipe.cuisines.join(', ')}<br/>
                                        </li>
                                    }
                                    {
                                        targetRecipe.diets.length !== 0 &&
                                        <li className="list-group-item">
                                            <span className="fw-bold">Diets: </span>{targetRecipe.diets.join(', ')}<br/>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ingredients */}
                    <div className="row wd-border m-4 mt-3">
                        <IngredientsList ingredients={targetRecipe.extendedIngredients}/>
                    </div>

                    {/* directions */}
                    {/*<div className="row wd-border m-4">*/}
                    {/*    {*/}
                    {/*        targetRecipe.analyzedInstructions[0].steps &&*/}
                    {/*        <DirectionsList directions={targetRecipe.analyzedInstructions[0].steps}/>*/}
                    {/*    }*/}
                    {/*</div>*/}
                    {
                        targetRecipe.instructions &&
                        <div className="row wd-border m-4">
                            <div className="p-3">
                                <div className="fw-bold fs-5 text-dark">
                                    Directions
                                </div>
                                <span className="text-dark mt-2">{targetRecipe.instructions}</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        
    );
};
export default SpoonacularRecipeDetail;