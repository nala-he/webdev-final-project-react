import React from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router";
import MyRecipesItem from "./my-recipes-item";

const MyRecipes = () => {
    const myRecipes = useSelector(state => state.myRecipes);
    // let friendRecipes = useSelector(state => state.friendRecipes);
    // const {pathname} = useLocation();
    // const paths = pathname.split('/');
    // Saved for future implementation
    // let recipes = paths.includes(myRecipes[0].createdBy) ? myRecipes : friendRecipes;
    // Use below for now
    let recipes = myRecipes;

    return (
        <div>
            {/* Search bar */}
            <div className="position-relative m-3">
                <input placeholder="Search Recipes"
                       className="form-control rounded-pill ps-5 text-dark"/>
                <i className="bi bi-search position-absolute wd-nudge-up text-dark"></i>
            </div>
            <div className="ms-4 text-dark fw-bold">
                <span>Total Created Recipes: {recipes.length}</span>
            </div>
            {

                recipes.map(recipe => <MyRecipesItem key={recipe._id} recipe={recipe}/>)

            }
        </div>
    );
};
export default MyRecipes;