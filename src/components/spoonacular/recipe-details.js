import React from "react";
import {Link} from "react-router-dom";
import recipes from "../../data/recipes.json";
import RecipeInfo from "./recipe-info";

const RecipeResultDetails = () => {
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
                <RecipeInfo recipe={recipes[0]}/>
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