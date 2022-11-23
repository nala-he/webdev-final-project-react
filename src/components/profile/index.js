import React from "react";
import {Link} from "react-router-dom";
import {Routes, Route, useLocation} from "react-router";
import {useSelector} from "react-redux";
import ProfileDetails from "./profile-details";
import MyRecipes from "./my-recipes";
import EditProfile from "./edit-profile";
import "./index.css";

const Profile = () => {
    let loggedIn = useSelector(state => state.profile);
    let friend = useSelector(state => state.friendProfile);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = paths.includes('my-recipes') ? 'my-recipes' : 'profile';
    let profile = paths.includes(loggedIn._id) ? loggedIn : friend;
    
    return (
        <div className="mt-3">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={`nav-link text-dark ${active === 'profile' ? 'active' : ''}`}
                          to={`/profile/${profile._id}/*`}>
                        <h5 className={`${active === 'profile' ? 'fw-bolder' : ''}`}>
                            Profile
                        </h5>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link text-dark ${active === 'my-recipes' ? 'active'
                    : ''}`}
                          to={`/profile/${profile._id}/my-recipes/*`}>
                        <h5 className={`${active === 'my-recipes' ? 'fw-bolder' : ''}`}>
                            My Recipes
                        </h5>
                    </Link>
                </li>
            </ul>
            <div>
                <Routes>
                    <Route index element={<ProfileDetails/>}/>
                    <Route path="/my-recipes" element={<MyRecipes/>}/>
                    <Route path="/edit" element={<EditProfile/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default Profile;