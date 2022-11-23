import React from "react";
import "./index.css";
import IngredientsList from "./ingredients-list";

const RecipeDetail = ({recipe}) => {
    return (
        <div className="m-3 wd-border h-100 bg-white">
            {/* author and dish title */}
            <div className="p-4 d-flex justify-content-start align-items-center">
                {/* author avatar */}
                <div>
                    <img src={`/images/${recipe.avatar}`}
                         className="wd-author-avatar"/>
                </div>
                {/* dish title and author name */}
                <div className="text-dark ms-5">
                    <div className="fs-2 fw-bold text-wrap">
                        {recipe.dishName}
                    </div>
                    <div className="fs-6 text-wrap">
                        Created By: {recipe.author}
                    </div>
                </div>
            </div>

            {/* recipe pic and recipe summary/times */}
            <div className="d-flex align-items-center justify-content-between flex-wrap">
                {/* recipe pic */}
                <div className="ps-4">
                    <img src={`/images/${recipe.recipePic}`}
                         className="wd-recipe-pic"/>
                </div>
                {/* recipe summary/times */}
                <div className="wd-border text-dark ms-2 me-4 wd-width-45">
                    <ul className="p-3 pb-0">
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

            {/* ingredients */}
            <div className="row wd-border m-4">
                <IngredientsList ingredients={recipe.ingredients}/>
            </div>

            {/* directions */}
            <div className="row wd-border m-4">

            </div>
        </div>
    );
};
export default RecipeDetail;