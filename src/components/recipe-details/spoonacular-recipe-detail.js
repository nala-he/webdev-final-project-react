import React, {useEffect} from "react";
import "./index.css";
import IngredientsList from "./ingredients-list";
import DirectionsList from "./directions-list";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findRecipeInfoByIdThunk} from "../../services/spoonacular-thunks";

const SpoonacularRecipeDetail = () => {
    const {targetRecipe} = useSelector(state => state.spoonacular);
    
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const rid = paths[4];
    console.log(rid);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findRecipeInfoByIdThunk(rid));
    },[rid])
    
    return (
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
            <div className="row wd-border m-4">
                <DirectionsList directions={targetRecipe.analyzedInstructions[0]}/>
            </div>
        </div>
    );
};
export default SpoonacularRecipeDetail;