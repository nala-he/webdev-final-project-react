// new nav bar that has on click capabilities
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import { createRecipeThunk, deleteInvalidRecipesThunk } from "../../services/recipes-thunk";
import "./index.css";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logoutThunk} from "../../services/auth-thunks";

const NewNavigationSidebar2 = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let temp = paths[paths.length - 1] === '' ? 'home' : paths[paths.length - 1];
    let firstWord = paths[1];
    let active = paths.includes("my-recipes") || paths.includes("profile") ? "profile" : temp;
    
    const {currentUser} = useSelector(state => state.usersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(logoutThunk())
            .then(() => navigate('/login'));
    }

    const createRecipeHandler = () => {
        if (currentUser) {
            let uid = currentUser._id;
            dispatch(createRecipeThunk({uid}));
        }
    }
    const deleteInvalidRecipesHandler = () => {
        dispatch(deleteInvalidRecipesThunk());
    }

    return (
            <div className="mt-2 wd-component-outline">
                {/*Logo and sitename*/}
                <div className="m-2 row row-cols-12">
                        <div className="col-2 d-flex align-items-center justify-content-center">
                            <img src="/images/logo.png" className="wd-logo" alt="logo"/>
                        </div>
                        <div className="col-10 d-flex align-items-center justify-content-center">
                            <span className="d-none d-xl-block wd-sitename text-black">
                                RecipeFridge
                            </span>
                        </div>
                </div>
                {/*Navigation Buttons*/}

                {/* Home */}
                <div className="m-2">
                    {
                    ("/home" !== "/login" && "/home" !== "/logout") &&
                    <Link to="/home" className={`${"/home".includes(active) ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" onClick={deleteInvalidRecipesHandler} className={`button mt-2 mb-2 w-100
                        ${"/home".includes(active) ? 'wd-button-active' : ''}`}>
                            <div className="row row-cols-12 pt-1 pb-1">
                                <div className="col-2 d-flex align-items-center">
                                    <i className="bi bi-house-door-fill"> </i>
                                </div>
                                <div className="col-10 d-flex align-items-start">
                                    <div className="d-none d-xl-block d-xxl-none">
                                        <span className="wd-text-size-small">Home</span>
                                    </div>
                                    <div className="d-none d-xxl-block">
                                        <span className="wd-text-size">Home</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </Link>
                    }
                </div>

                {/* Profile */}
                <div className="m-2">
                    {
                    ("/profile" !== "/login" && "/profile" !== "/logout") &&
                    <Link to="/profile" className={`${"/profile".includes(active) ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" onClick={deleteInvalidRecipesHandler} className={`button mt-2 mb-2 w-100
                        ${"/profile".includes(active) ? 'wd-button-active' : ''}`}>
                            <div className="row row-cols-12 pt-1 pb-1">
                                <div className="col-2 d-flex align-items-center">
                                    <i className="bi bi-person"> </i>
                                </div>
                                <div className="col-10 d-flex align-items-start">
                                    <div className="d-none d-xl-block d-xxl-none">
                                        <span className="wd-text-size-small">Profile</span>
                                    </div>
                                    <div className="d-none d-xxl-block">
                                        <span className="wd-text-size">Profile</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </Link>
                    }
                </div>

                {/* Friends */}
                <div className="m-2">
                    {
                    ("/friends" !== "/login" && "/friends" !== "/logout") &&
                    <Link to="/friends" className={`${"/friends/followers".includes(firstWord || active)
                                                      ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" onClick={deleteInvalidRecipesHandler} className={`button mt-2 mb-2 w-100
                        ${"/friends/followers".includes(firstWord || active) ? 'wd-button-active' : ''}`}>
                            <div className="row row-cols-12 pt-1 pb-1">
                                <div className="col-2 d-flex align-items-center">
                                    <i className="bi bi-people-fill"> </i>
                                </div>
                                <div className="col-10 d-flex align-items-start">
                                    <div className="d-none d-xl-block d-xxl-none">
                                        <span className="wd-text-size-small">Friends</span>
                                    </div>
                                    <div className="d-none d-xxl-block">
                                        <span className="wd-text-size">Friends</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </Link>
                    }
                </div>

                {/* Saved Recipes */}
                <div className="m-2">
                    {
                    ("/users/:uid/saved-recipes" !== "/login" && "/users/:uid/saved-recipes" !== "/logout") &&
                    <Link to="/users/:uid/saved-recipes" className={`${"/users/:uid/saved-recipes".includes(active) ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" onClick={deleteInvalidRecipesHandler} className={`button mt-2 mb-2 w-100
                        ${"/users/:uid/saved-recipes".includes(active) ? 'wd-button-active' : ''}`}>
                            <div className="row row-cols-12 pt-1 pb-1">
                                <div className="col-2 d-flex align-items-center">
                                    <i className="bi bi-save2"> </i>
                                </div>
                                <div className="col-10 d-flex align-items-start">
                                    <div className="d-none d-xl-block d-xxl-none">
                                        <span className="wd-text-size-small">Saved Recipes</span>
                                    </div>
                                    <div className="d-none d-xxl-block">
                                        <span className="wd-text-size">Saved Recipes</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </Link>
                    }
                </div>

                {/* Create Recipes */}
                <div className="m-2">
                    {
                    (currentUser && currentUser.type !== "REG USER" && "/users/:uid/create-recipes" !== "/login" && "/users/:uid/create-recipes" !== "/logout") &&
                    <Link to="/users/:uid/create-recipes" className={`${"/users/:uid/create-recipes".includes(active) ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" onClick={createRecipeHandler}
                        className={`button mt-2 mb-2 w-100 ${"/users/:uid/create-recipes".includes(active) ? 'wd-button-active' : ''}`}>
                            <div className="row row-cols-12 pt-1 pb-1">
                                <div className="col-2 d-flex align-items-center">
                                    <i className="bi bi-pencil-square"> </i>
                                </div>
                                <div className="col-10 d-flex align-items-start">
                                    <div className="d-none d-xl-block d-xxl-none">
                                        <span className="wd-text-size-small">Create Recipe</span>
                                    </div>
                                    <div className="d-none d-xxl-block">
                                        <span className="wd-text-size">Create Recipe</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </Link>
                    }
                </div>

                {/*show logout button if logged in*/}
                {
                    currentUser &&
                    <div className="m-2">
                    <button type="button"
                            className={`button mt-2 mb-2 w-100 
                    ${"/logout".includes(active) ? 'wd-button-active' : ''}`}
                            onClick={logout}>
                        <div className="row row-cols-12 pt-1 pb-1">
                            <div className="col-2 d-flex align-items-center">
                                <i className="bi bi-door-open-fill"> </i>
                            </div>
                            <div className="col-10 d-flex align-items-start">
                                <div className="d-none d-xl-block d-xxl-none">
                                    <span className="wd-text-size-small">Logout</span>
                                </div>
                                <div className="d-none d-xxl-block">
                                    <span className="wd-text-size">Logout</span>
                                </div>
                            </div>
                        </div>
                    </button>
                    </div>
                }
                {/*show login button if not logged in*/}
                {
                    (currentUser === null) &&
                    <div className="m-2">
                    <Link to="/login" className={`${"/login".includes(active)
                                                       ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" className={`button mt-2 mb-2 w-100 
                    ${"/login".includes(active) ? 'wd-button-active' : ''}`}>
                            <div className="row row-cols-12 pt-1 pb-1">
                                <div className="col-2 d-flex align-items-center">
                                    <i className="bi bi-door-open"> </i>
                                </div>
                                <div className="col-10 d-flex align-items-start">
                                    <div className="d-none d-xl-block d-xxl-none">
                                        <span className="wd-text-size-small">Login</span>
                                    </div>
                                    <div className="d-none d-xxl-block">
                                        <span className="wd-text-size">Login</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </Link>
                    </div>
                }
            </div>
    );
};
export default NewNavigationSidebar2;