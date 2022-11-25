import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import MyRecipesItem from "./my-recipes-item";

const MyRecipes = () => {
    const myRecipes = useSelector(state => state.myRecipes);

    return (
        <div>
            {/* Search bar */}
            <div className="position-relative m-3">
                <input placeholder="Search Recipes"
                       className="form-control rounded-pill ps-5 text-dark"/>
                <i className="bi bi-search position-absolute wd-nudge-up text-dark"></i>
            </div>
            <div className="ms-4 text-dark fw-bold">
                <span>Total Saved Recipes: {myRecipes.length}</span>
            </div>
            {
                myRecipes.map(recipe => <MyRecipesItem key={recipe._id} recipe={recipe}/>)
            }
        </div>
    );
};
export default MyRecipes;