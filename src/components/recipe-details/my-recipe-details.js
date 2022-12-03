// Revise to Macee's MyRecipeDetails page
import React from "react";
import IngredientsList from "./ingredients-list";
import DirectionsList from "./directions-list";
import NutritionalFacts from "./nutritional-facts";
import recipes from "../../data/recipes.json";
import "../profile/index.css";
import {Link} from "react-router-dom";


const MyRecipeDetails = ({recipe = recipes[0]}) => {
    return (
        <div className="m-3 mb-0 wd-border wd-bg-beige">
            {/* close button */}
            <div className="d-flex justify-content-end m-3 me-4">
                    <Link to={`/profile/my-recipes`}>
                        <i className="bi bi-x-square text-black fs-3"></i>
                    </Link>
            </div>

            <div className="m-3 wd-border h-100 bg-white">
            {/* author and dish title */}
            <div className="m-4 mb-3 d-flex justify-content-start align-items-center">
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
            <div className="d-flex align-items-center justify-content-center flex-wrap">
                {/* recipe pic */}
                <div className="m-2">
                    <img src={`/images/${recipe.recipePic}`}
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
            <div className="row wd-border m-4 mt-3">
                <IngredientsList ingredients={recipe.ingredients}/>
            </div>

            {/* directions */}
            <div className="row wd-border m-4">
                <DirectionsList directions={recipe.directions}/>
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
        </div>
            {/* save or delete button (depends on which page) */}
            <div className="d-flex justify-content-center">
                {/* save button if in my recipes page */}
                <Link to={`/profile/my-recipes`}
                      className="text-decoration-none d-flex align-items-center">
                    <i className="bi bi-save2 text-black fs-3"></i>
                    <span className="fw-bold fs-5 ms-3 text-dark">
                        Save Recipe
                    </span>
                </Link>
            </div>
        </div>
    );
};
export default MyRecipeDetails;