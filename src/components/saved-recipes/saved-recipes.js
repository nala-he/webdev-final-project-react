import React from "react";
import SavedRecipesList from "../saved-recipes/saved-recipes-list"
import "./index.css"
import {useNavigate, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const SavedRecipes = () => {
    // added currentUser from users-reducer to get the logged-in user's info and tell if user logged in or not
    const {currentUser} = useSelector(state => state.usersData);
    // if user not logged in, go to the login page
    if (!currentUser) {
        return <Navigate to='/login'/>
    }
    
    return (
        <div className="m-3 wd-border">
            <SavedRecipesList/>
        </div>
    );
};
export default SavedRecipes;