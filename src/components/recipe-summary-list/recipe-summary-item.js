import React from "react"
import "./index.css"
import {Link} from "react-router-dom";

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
    
    return(
    <div className="wd-item-border m-4 p-3 row">
        <div className="col-2 p-2">
            <img className="wd-avatar" src={recipe.avatar} alt="avatar"/>
        </div>
        <div className="col-10 ">
            <div className="p-3 wd-item-content">
                <div>
                    <span className="text-dark fw-bolder">{recipe.dishName} </span>
                    <span className="col text-muted"> @{recipe.authorName} </span>
                </div>
                <span className="text-dark">{recipe.intro}</span>
                <div className="d-flex justify-content-center">
                    <img className="wd-recipe-image mt-2 d-none d-md-block"
                         src={`/images/${recipe.recipePic}`} alt="recipePic"/>
                </div>
            </div>
            <div className="row">
                <div className="btn col-4 text-dark">
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
                    <Link to={`/recipes/${recipe._id}/details`}>
                        <div className="d-block d-xl-none">
                            <i className="fa-solid fa-utensils text-dark p-2"></i>
                            <span className="wd-text-md">Open Recipe</span>
                        </div>
                        <div className="d-none d-xl-block">
                            <i className="fa-solid fa-utensils text-dark p-2"></i>
                            <span>Open Recipe</span>
                        </div>
                    </Link>
                </div>
                <div className="btn col-4 text-dark">
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