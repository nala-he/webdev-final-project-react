import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import IngredientsList from "./ingredients-list";
import DirectionsList from "./directions-list";

const RecipeInfo = ({recipe}) => {
    return (
        <div className="m-3 wd-border h-100 bg-white">
            {/* dish title and source */}
            <div className="m-4 mb-3 d-flex align-items-center justify-content-center">
                <div className="text-dark text-center">
                    <div className="fs-2 fw-bold text-wrap">
                        {recipe.title}
                    </div>
                    <div className="fs-6 text-wrap mt-2 text-center">
                        <span>Source: </span>
                        <Link to={recipe.sourceUrl} className="text-decoration-none text-dark">
                            {recipe.sourceUrl}
                        </Link>
                    </div>
                </div>
            </div>

            {/* recipe pic and recipe summary/times */}
            <div className="d-flex align-items-center justify-content-center flex-wrap">
                {/* recipe pic */}
                <div className="m-2">
                    <img src={`${recipe.image}`}
                         className="wd-recipe-pic"/>
                </div>
                {/* recipe summary/times */}
                <div className="m-2">
                    <div className="wd-border text-dark wd-width-305">
                        <ul className="mt-3">
                            {
                                recipe.preparationMinutes !== -1 &&
                                <li className="list-group-item">
                                    <span className="fw-bold">Prep Time: </span>{recipe.preparationMinutes} mins<br/>
                                </li>
                            }
                            {
                                recipe.cookingMinutes !== -1 &&
                                <li className="list-group-item">
                                    <span className="fw-bold">Cook Time: </span>{recipe.cookingMinutes} mins<br/>
                                </li>
                            }
                            {
                                recipe.readyInMinutes !== -1 &&
                                    <li className="list-group-item">
                                        <span className="fw-bold">Total Time: </span>{recipe.readyInMinutes} mins<br/>
                                    </li>
                            }
                            {
                                recipe.servings !== -1 &&
                                <li className="list-group-item">
                                    <span className="fw-bold">Servings: </span>{recipe.servings}<br/>
                                </li>
                            }
                            {
                                recipe.cuisines.length !== 0 &&
                                <li className="list-group-item">
                                    <span className="fw-bold">Cuisines: </span>{recipe.cuisines.join(', ')}<br/>
                                </li>
                            }
                            {
                                recipe.diets.length !== 0 &&
                                <li className="list-group-item">
                                    <span className="fw-bold">Diets: </span>{recipe.diets.join(', ')}<br/>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>

            {/* ingredients */}
            <div className="row wd-border m-4 mt-3">
                <IngredientsList ingredients={recipe.extendedIngredients}/>
            </div>

            {/* directions */}
            <div className="row wd-border m-4">
                <DirectionsList directions={recipe.analyzedInstructions[0]}/>
            </div>

        </div>
    );
};
export default RecipeInfo;