import React from "react";
import NavigationSidebarItem from "./navigation-sidebar-item";
import itemsArray from "./item.json";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import "./index.css";
import { createRecipeThunk, deleteInvalidRecipesThunk } from "../../services/recipes-thunk";
// import * as service from "../../services/auth-service";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logoutThunk} from "../../services/auth-thunks";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let temp = paths[paths.length - 1] === '' ? 'home' : paths[paths.length - 1];
 
    let active = temp;
    if (paths.includes("my-recipes") || paths.includes("profile")) {
        active = "profile";
    } if (paths.includes("friends")) {
        active = "friends"; 
    }
    
    const {currentUser} = useSelector(state => state.usersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(logoutThunk())
            .then(() => navigate('/login'));
    }

    // hard coded user for now
    // const uid = "638624452cf03e49f0977570";
    // const uid = currentUser.uid;

    // const createRecipeHandler = () => {
    //     dispatch(createRecipeThunk({uid}));
    // }

    // const deleteInvalidRecipesHandler = () => {
    //     dispatch(deleteInvalidRecipesThunk());
    // }

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
                <div className="m-2">
                {
                    itemsArray.map(item => <NavigationSidebarItem
                        key={item._id} item={item} active={active}/>)
                }
                {/*show logout button if logged in*/}
                {
                    currentUser &&
                    <button type="button"
                            className={`button mt-2 mb-2 w-100 
                    ${itemsArray[6].link.includes(active) ? 'wd-button-active' : ''}`}
                            onClick={logout}>
                        <div className="row row-cols-12 pt-1 pb-1">
                            <div className="col-2 d-flex align-items-center">
                                <i className={`${itemsArray[6].icon}`}> </i>
                            </div>
                            <div className="col-10 d-flex align-items-start">
                                <div className="d-none d-xl-block d-xxl-none">
                                    <span className="wd-text-size-small">{itemsArray[6].text}</span>
                                </div>
                                <div className="d-none d-xxl-block">
                                    <span className="wd-text-size">{itemsArray[6].text}</span>
                                </div>
                            </div>
                        </div>
                    </button>
                }
                {/*show login button if not logged in*/}
                {
                    (currentUser === null) &&
                    <Link to={itemsArray[5].link} className={`${itemsArray[5].link.includes(active)
                                                       ? 'active' : ''}`}>
                        {/*Navigation Button Item*/}
                        <button type="button" className={`button mt-2 mb-2 w-100 
                    ${itemsArray[5].link.includes(active) ? 'wd-button-active' : ''}`}>
                            <div className="row row-cols-12 pt-1 pb-1">
                                <div className="col-2 d-flex align-items-center">
                                    <i className={`${itemsArray[5].icon}`}> </i>
                                </div>
                                <div className="col-10 d-flex align-items-start">
                                    <div className="d-none d-xl-block d-xxl-none">
                                        <span className="wd-text-size-small">{itemsArray[5].text}</span>
                                    </div>
                                    <div className="d-none d-xxl-block">
                                        <span className="wd-text-size">{itemsArray[5].text}</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </Link>
                }
                </div>
            </div>
    );
};
export default NavigationSidebar;
