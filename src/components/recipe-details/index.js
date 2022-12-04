import React, {useEffect,useState} from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import RecipeDetail from "./recipe-detail";
import recipes from "../../data/recipes.json";
import * as service from "../../services/recipes-service";

const RecipeDetailsComponent = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const userId = paths[2];
    let location = paths[3];
    let recipeId = paths[4];
    const [recipe, setRecipe] = useState()

    if (paths[1] === "recipes") {
        recipeId = paths[2]
        location = paths[1]
    }

    useEffect(() => {
        async function fetchData() {
            const targetRecipe = await service.findRecipeById(recipeId)
            setRecipe(targetRecipe)
        }
        fetchData();
    },[recipeId]);
    console.log(recipe);

    return (
        <div className="m-3 mb-0 wd-border wd-bg-beige">
            {/* close button */}
            <div className="d-flex justify-content-end m-3 me-4">
                {
                    location === "my-recipes" &&
                    <Link to={`/profile/${userId}/my-recipes`}>
                        <i className="bi bi-x-square text-black fs-3"></i>
                    </Link>
                }
                {
                    location === "saved-recipes" &&
                    <Link to={`/users/${userId}/saved-recipes`}>
                        <i className="bi bi-x-square text-black fs-3"></i>
                    </Link>
                }
            </div>

            {/* recipe detail */}
            <div>
                {/* hardcode recipe - update later*/}
                <RecipeDetail recipe={recipe}/>
            </div>

            {/* save or delete button (depends on which page) */}
            <div className="d-flex justify-content-center">
                {/* save button if in my recipes page */}
                {
                    location === "my-recipes" &&
                    <Link to={`/profile/${userId}/my-recipes`}
                          className="text-decoration-none d-flex align-items-center">
                        <i className="bi bi-save2 text-black fs-3"></i>
                        <span className="fw-bold fs-5 ms-3 text-dark">
                            Save Recipe
                        </span>
                    </Link>
                }

                {/* delete button if in saved recipes page */}
                {
                    location === "saved-recipes" &&
                    <Link to={`/users/${userId}/saved-recipes`}
                          className="text-decoration-none d-flex align-items-center">
                        <i className="bi bi-trash text-black fs-3"></i>
                        <span className="fw-bold fs-5 ms-3 text-dark">
                            Delete Recipe
                        </span>
                    </Link>
                }
            </div>
        </div>
    );
};
export default RecipeDetailsComponent;