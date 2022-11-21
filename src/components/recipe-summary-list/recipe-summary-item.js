import React from "react"
import "./index.css"

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
            <img className="wd-image-round" src={`/images/${recipe.avatar}`} alt="avatar"/>
        </div>
        <div className="col-10 ">
            <div className="p-3 wd-item-content">
                <div>
                    <span className="text-dark fw-bolder">{recipe.dishName} </span>
                    <span className="col text-muted"> @{recipe.author} </span>
                </div>
                <span className="text-dark">{recipe.intro}</span>
                <div className="d-flex justify-content-center">
                    <img className="wd-recipe-image mt-2 d-none d-md-block"
                         src={`/images/${recipe.recipePic}`} alt="recipePic"/>
                </div>
            </div>
            <div className="row">
                <div className="btn col-5 text-dark">
                    <div className="d-block d-xl-none">
                        <i className="bi bi-bookmark text-dark p-2"></i>
                        <span className="wd-text-md">Save Recipe</span>
                    </div>
                    <div className="d-none d-xl-block">
                        <i className="bi bi-bookmark text-dark p-2"></i>
                        <span>Save Recipe</span>
                    </div>
                </div>
                <div className="btn col-6 text-dark">
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