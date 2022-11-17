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
                    {/* <i className="bi bi-patch-check-fill"></i> */}
                </div>
                <span className="text-dark">{recipe.intro}</span>
                <img className="wd-recipe-image mt-3" src={`/images/${recipe.recipePic}`} alt="recipePic"/>
            </div>
            <div className="row">
                <div className="btn col-5 text-dark">
                    <i className="bi bi-bookmark text-dark p-2"></i>
                    <span className="">Save Recipe</span>
                </div>
                <div className="btn col-6 text-dark">
                    <i className="bi bi-check-square text-dark p-2"></i>
                    <span className="">Follow Author</span>
                </div>
            </div> 
        </div>

    </div>    
    );
}
export default RecipeSummaryItem;