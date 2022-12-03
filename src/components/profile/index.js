import {React, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Routes, Route, useLocation} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import ProfileDetails from "./profile-details";
import MyRecipes from "./my-recipes";
import EditProfile from "./edit-profile";
import MyRecipeDetails from "../recipe-details/my-recipe-details";
import "./index.css";
import * as service from "../../services/auth-service";
import {useNavigate} from "react-router-dom";
// import updateProfile from "../../reducers/profile-reducer";
// import {findUsersThunk} from "../../services/users-thunks";
import {findUserByIdThunk} from "../../services/users-thunks";

const Profile = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = paths.includes('my-recipes') ? 'my-recipes' : 'profile';

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentUser}= useSelector(state => state.usersData);

    // useEffect(() => {
    //     // const fetchData = async () => {
    //         // const user = await service.profile();
    //         // console.log(user);
    //         // await dispatch(findUsersThunk());
    //         // console.log(users);
    //         // const updatedUser = await users.filter(u => u._id === user._id)[0];
    //
    //         // setLoggedIn(updatedUser);
    //         // setLoggedIn(user);
    //         // console.log(loggedIn);
    //     // }
    //     try {
    //         // fetchData();
    //         dispatch(findUserByIdThunk(currentUser._id));
    //     }
    //     catch(e) {
    //         navigate('/login');
    //     }
    // }, []);

    let profile = currentUser;
    // console.log(profile);
    return (
        <div className="mt-3">
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
            <div>
                <Routes>
                    <Route index element={<ProfileDetails/>}/>
                    {/*moved below to fridge/index.js*/}
                    {/*<Route path="/my-recipes" element={<MyRecipes/>}/>*/}
                    {/*<Route path="/edit" element={<EditProfile/>}/>*/}
                    {/*<Route path="/my-recipes/details" element={<MyRecipeDetails/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}
export default Profile;