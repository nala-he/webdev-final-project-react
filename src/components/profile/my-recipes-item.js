import React from "react";
import "./index.css";

const MyRecipesItem = ({recipe}) => {
    return (
        <div className="m-3 p-2 wd-my-recipe-content">
            <div className="row d-flex align-items-center">
                <span className="ps-3 pe-3 col-2">{recipe.privacy}</span>
                <div className="btn col-5 text-dark">
                    <div className="d-block d-xl-none">
                        <i className="bi bi-trash text-dark p-2"></i>
                        <span className="wd-text-md">Delete Recipe</span>
                    </div>
                    <div className="d-none d-xl-block">
                        <i className="bi bi-trash text-dark p-2"></i>
                        <span>Delete Recipe</span>
                    </div>
                </div>
                <div className="btn col-5 text-dark">
                    <div className="d-block d-xl-none">
                        <i className="fa-solid fa-utensils text-dark p-2"></i>
                        <span className="wd-text-md">Open Recipe</span>
                    </div>
                    <div className="d-none d-xl-block">
                        <i className="fa-solid fa-utensils text-dark p-2"></i>
                        <span>Open Recipe</span>
                    </div>
                </div>
            </div>
            <div className="wd-inner-content row p-2 position-relative m-1">
                <div className="col-4 p-2">
                    <img className="wd-my-recipe-image" src={`/images/${recipe.recipePic}`} alt="avatar"/>
                </div>
                <div className="col-7">
                    <div className="p-2 row">
                        <div className="col-9">
                            <div>
                                <span className="text-dark fw-bolder">{recipe.dishName} </span>
                            </div>
                            <span className="text-dark d-none d-md-block">Prep Time: {recipe.prepTime}</span>
                            <span className="text-dark d-none d-md-block">Cook Time: {recipe.cookTime}</span>
                            <span className="text-dark d-none d-md-block">
                                Total Time: {parseInt(recipe.prepTime) + parseInt(recipe.cookTime)} mins</span>
                            <span className="text-dark d-none d-md-block">Servings: {recipe.servings}</span>
                            <span className="text-dark d-none d-md-block">Difficulty: {recipe.difficulty}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyRecipesItem;