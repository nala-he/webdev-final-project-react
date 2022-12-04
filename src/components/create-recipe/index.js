import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import CreateRecipe from "./create-recipe";
import recipes from "../../data/recipes.json";
import { useSelector } from "react-redux";
import {useNavigate, Navigate} from "react-router-dom";

const CreateRecipeComponent = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const userId = paths[2];
    const location = paths[3];
    const recipeId = paths[4];

    const profile = useSelector(state => state.profile);

    // added currentUser from users-reducer to get the logged-in user's info and tell if user logged in or not
    const {currentUser} = useSelector(state => state.usersData);
    // if user not logged in, go to the login page
    if (!currentUser) {
        return <Navigate to='/login'/>
    }

    return (
        <div className="m-3 mb-0 wd-border wd-bg-beige">
            {/* recipe detail */}
            <div>
                {/* hardcode recipe - update later*/}
                <CreateRecipe profile ={profile}/>
            </div>
        </div>
    );
};
export default CreateRecipeComponent;