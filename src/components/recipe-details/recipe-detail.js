import React from "react";
import "./index.css";
import IngredientsList from "./ingredients-list";
import DirectionsList from "./directions-list";
import NutritionalFacts from "./nutritional-facts";

const RecipeDetail = ({recipe}) => {
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
export default RecipeDetail;