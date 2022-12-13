import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useLocation} from "react-router";
import MyRecipesItem from "./my-recipes-item";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {findUserByIdThunk} from "../../services/users-thunks";
import { findRecipesByAuthorThunk } from "../../services/recipes-thunk";

const MyRecipes = () => {
    const myRecipes = useSelector(state => state.myRecipes);
    // let friendRecipes = useSelector(state => state.friendRecipes);
    // const {pathname} = useLocation();
    // const paths = pathname.split('/');
    // Saved for future implementation
    // let recipes = paths.includes(myRecipes[0].createdBy) ? myRecipes : friendRecipes;
    // Use below for now
    // let recipes = myRecipes;
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = paths.includes('my-recipes') ? 'my-recipes' : 'profile';

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentUser}= useSelector(state => state.usersData);
    const {recipes} = useSelector(state => state.recipes)

    useEffect(() => {
        try {
            if (currentUser) {
              dispatch(findUserByIdThunk(currentUser._id));
              dispatch(findRecipesByAuthorThunk(currentUser._id));
            }
            // console.log(recipes);
        }
        catch(e) {
            navigate('/login');
        }
    }, [currentUser, dispatch, navigate]);
    
    let profile = currentUser;
    
    return (
        <div className="mt-3">
            {
                profile &&
                <>
                    {/*show the profile/my recipes nav tag if is for logged in user*/}
                    {
                        paths.length === 3 &&
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <Link className={`nav-link text-dark ${active === 'profile' ? 'active' : ''}`}
                                      to={`/profile`}>
                                    <h5 className={`${active === 'profile' ? 'fw-bolder' : ''}`}>
                                        Profile
                                    </h5>
                                </Link>
                            </li>
                            {
                                profile.type !== "REG USER"
                                &&
                                <li className="nav-item">
                                    <Link className={`nav-link text-dark ${active === 'my-recipes' ? 'active'
                                                                                                   : ''}`}
                                          to={`/profile/my-recipes`}>
                                        <h5 className={`${active === 'my-recipes' ? 'fw-bolder' : ''}`}>
                                            My Recipes
                                        </h5>
                                    </Link>
                                </li>
                            }
                        </ul>
                    }
                    <div>
                        {/* Search bar */}
                        {/* <div className="position-relative m-3">
                            <input placeholder="Search Recipes"
                                   className="form-control rounded-pill ps-5 text-dark"/>
                            <i className="bi bi-search position-absolute wd-nudge-up text-dark"></i>
                        </div> */}
                        <div className="mt-3 ms-4 text-dark fw-bold">
                            <span>Total Created Recipes: {recipes.length}</span>
                        </div>
                        {

                            recipes.map(recipe => <MyRecipesItem key={recipe._id} recipe={recipe}/>)

                        }
                    </div>
                </>
            
            }
        </div>
    );
};
export default MyRecipes;