import React from "react"
import "./index.css"

const SavedRecipeItem = (
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
    <div className="wd-saved-item-border m-4 p-2 row">
        <div className="col-3 col-sm-3 col-md-2 col-lg-2 p-2">
            <img className="wd-avatar" src={`/images/${recipe.avatar}`} alt="avatar"/>
        </div>
        <div className="col-9 col-sm-9 col-md-10 col-lg-10">
            <div className="p-2 row wd-saved-item-content">
                <div className="col-9">
                    <div>
                        <span className="text-dark fw-bolder">{recipe.dishName} </span>
                        <span className="col text-muted"> @{recipe.author} </span>
                    </div>
                    <span className="text-dark d-none d-md-block">{recipe.intro}</span>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <img className="wd-saved-recipe-image m-2 d-none d-md-block"
                         src={`/images/${recipe.recipePic}`} alt="recipePic"/>
                </div>
            </div>
            <div className="row">
                <div className="btn col-6 text-dark">
                    {/* xs, sm*/}
                    <div className="wd-btn-align d-md-none">
                        <i className="bi bi-trash text-dark p-2"></i>
                    </div>
                    {/* medium-large */}
                    <div className="wd-btn-align d-none d-md-block d-xl-none">
                        <i className="bi bi-trash text-dark p-2"></i>
                        <span className="wd-text-md">Delete Recipe</span>
                    </div>
                    {/* x-large */}
                    <div className="wd-btn-align d-none d-xl-block">
                        <i className="bi bi-trash text-dark p-2"></i>
                        <span>Delete Recipe</span>
                    </div>
                </div>
                <div className="btn col-6 text-dark">
                    {/* xs , sm */}
                    <div className="wd-btn-align d-md-none">
                        <i className="fa-solid fa-utensils text-dark p-2"></i>
                    </div>
                    {/* md-l */}
                    <div className="wd-btn-align d-none d-md-block d-xl-none">
                        <i className="fa-solid fa-utensils text-dark p-2"></i>
                        <span className="wd-text-md">Open Recipe</span>
                    </div>
                    {/* xl */}
                    <div className="wd-btn-align d-none d-xl-block">
                        <i className="fa-solid fa-utensils text-dark p-2"></i>
                        <span>Open Recipe</span>
                    </div>
                </div>
            </div> 
        </div>

    </div>    
    );
}
export default SavedRecipeItem;