import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import RecipeDetail from "./recipe-detail";
import recipes from "../../data/recipes.json";

const RecipeDetailsComponent = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const userId = paths[2];
    const location = paths[3];
    const recipeId = paths[4];

    return (
        <div className="m-3 wd-border wd-bg-beige">
            {/* close button */}
            <div className="d-flex justify-content-end m-3">
                {
                    location === "my-recipes" &&
                    <Link to={`/profile/${userId}/my-recipes`}>
                        <i className="bi bi-x-square text-black fs-3"></i>
                    </Link>
                }
                {
                    location === "saved-recipes" &&
                    <Link to="/savedrecipes">
                        <i className="bi bi-x-square text-black fs-3"></i>
                    </Link>
                }
            </div>

            {/* recipe detail */}
            <div>
                {/* hardcode recipe - update later*/}
                <RecipeDetail recipe={recipes[0]}/>
            </div>
        </div>
    );
};
export default RecipeDetailsComponent;