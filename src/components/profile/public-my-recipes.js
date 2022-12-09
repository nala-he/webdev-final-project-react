import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useLocation} from "react-router";
import MyRecipesItem from "./my-recipes-item";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {findUserByIdThunk} from "../../services/users-thunks";
import {findRecipesByAuthorThunk} from "../../services/recipes-thunk";

const PublicMyRecipes = () => {
    const {recipes} = useSelector(state => state.recipes);
    
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    // let active = paths.includes('my-recipes') ? 'my-recipes' : 'profile';
    let uid = paths[3];
        
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const {publicProfile}= useSelector(state => state.usersData);

    useEffect(() => {
        try {
            dispatch(findRecipesByAuthorThunk(uid));
        }
        catch(e) {
            navigate('/login');
        }
    }, [uid]);

    return (
        <div className="mt-3">
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
        </div>
    );
};
export default PublicMyRecipes;