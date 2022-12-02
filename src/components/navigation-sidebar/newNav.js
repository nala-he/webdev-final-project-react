// new nav bar that has on click capabilities
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { createRecipeThunk } from "../../services/recipes-thunk";
import "./index.css";

const NewNavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = (paths[1] !== '') ? paths[1] : 'home';

    const dispatch = useDispatch();

    // hard coded user for now
    const uid = "638624452cf03e49f0977570";

    const createRecipeHandler = () => {
        dispatch(createRecipeThunk({uid}));
    }

    return (
            <div className="mt-2 wd-component-outline">
                {/*Logo and sitename*/}
                <div className="m-2 row row-cols-12">
                        <div className="col-2 d-flex align-items-center justify-content-center">
                            <img src="/images/logo.png" className="wd-logo"/>
                        </div>
                        <div className="col-10 d-flex align-items-center justify-content-center">
                            <span className="d-none d-xl-block wd-sitename text-black">
                                RecipeFridge
                            </span>
                            {/*<h6 className="d-none d-xl-block p-3 fw-bold text-black">*/}
                            {/*    RecipeFridge*/}
                            {/*</h6>*/}
                        </div>
                </div>
                {/*Navigation Buttons*/}

                {/* Home */}
                <div className="m-2">
                    <Link to="/home" className={`${"/home".includes(active) ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" className={`button mt-2 mb-2 w-100
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
                </div>

                {/* Profile */}
                <div className="m-2">
                    <Link to="/profile" className={`${"/profile".includes(active) ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" className={`button mt-2 mb-2 w-100
                        ${"/profile".includes(active) ? 'wd-button-active' : ''}`}>
                            <div className="row row-cols-12 pt-1 pb-1">
                                <div className="col-2 d-flex align-items-center">
                                    <i className="bi bi-house-door-fill"> </i>
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
                </div>

                {/* Friends */}
                <div className="m-2">
                    <Link to="/friends" className={`${"/friends".includes(active) ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" className={`button mt-2 mb-2 w-100
                        ${"/friends".includes(active) ? 'wd-button-active' : ''}`}>
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
                </div>

                {/* Saved Recipes */}
                <div className="m-2">
                    <Link to="/users/:uid/saved-recipes" className={`${"/users/:uid/saved-recipes".includes(active) ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" onClick={null} className={`button mt-2 mb-2 w-100
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
                </div>

                {/* Create Recipes */}
                <div className="m-2">
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
                                        <span className="wd-text-size-small">Create Recipes</span>
                                    </div>
                                    <div className="d-none d-xxl-block">
                                        <span className="wd-text-size">Create Recipes</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </Link>
                </div>

                {/* Logout */}
                <div className="m-2">
                    <Link to="/logout" className={`${"/logout".includes(active) ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" onClick={null} className={`button mt-2 mb-2 w-100
                        ${"/logout".includes(active) ? 'wd-button-active' : ''}`}>
                            <div className="row row-cols-12 pt-1 pb-1">
                                <div className="col-2 d-flex align-items-center">
                                    <i className="bi bi-door-open"> </i>
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
                    </Link>
                </div>
            </div>
    );
};
export default NewNavigationSidebar;