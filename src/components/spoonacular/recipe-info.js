import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

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
            {/* <div className="row wd-border m-4 mt-3">
                <IngredientsList ingredients={recipe.ingredients}/>
            </div> */}

            {/* directions */}
            {/* <div className="row wd-border m-4">
                <DirectionsList directions={recipe.directions}/>
            </div> */}

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
        </div>
    );
};
export default RecipeInfo;