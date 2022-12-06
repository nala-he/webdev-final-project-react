import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import RecipeInfo from "./recipe-info";
import * as service from "../../services/spoonacular-service";

// HARDCODE RECIPE TO AVOID UNNECESSARY CALLS TO SPOONACULAR API -------------------------- UNCOMMENT OUT ONCE COMPLETE
import recipeDetails from "./recipe-details.json"
import {useLocation} from "react-router";

const RecipeResultDetails = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const rid = paths[3];

    // HARDCODE RECIPE TO AVOID UNNECESSARY CALLS TO SPOONACULAR API -------------------------- UNCOMMENT OUT ONCE COMPLETE
    const recipe = recipeDetails[0];

    //const [recipe, setRecipe] = useState({})

    // useEffect(() => {
    //     async function fetchData() {
    //         const targetRecipe = await service.findRecipeInfoById(rid);
    //         setRecipe(recipe);
    //     }
    // }, [])

    return (
        <div className="m-3 mb-0 wd-border wd-bg-beige">
            {/* close button */}
            <div className="d-flex justify-content-end m-3 me-4">
                <Link to="/searchByIngredients/results">
                    <i className="bi bi-x-square text-black fs-3"></i>
                </Link>
            </div>

            {/* recipe detail */}
            <div>
                <RecipeInfo recipe={recipe}/>
            </div>

            {/*<div className="d-flex justify-content-center">*/}
            {/*    /!* save button *!/*/}
            {/*    <Link to="/searchByIngredients/results"*/}
            {/*          className="text-decoration-none d-flex align-items-center">*/}
            {/*        <i className="bi bi-save2 text-black fs-3"></i>*/}
            {/*        <span className="fw-bold fs-5 ms-3 text-dark">*/}
            {/*            Save Recipe*/}
            {/*        </span>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </div>
    );
};
export default RecipeResultDetails;