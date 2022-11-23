import React from "react";
import {Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import {useLocation} from "react-router";
import ProfileDetails from "./profile-details";
import FriendProfileDetails from "./friend-profile-details";
import MyRecipes from "./my-recipes";
import FriendRecipes from "./friend-recipes";
import EditProfile from "./edit-profile";
import "./index.css";
import {useSelector} from "react-redux";

const Profile = () => {
    let loggedIn = useSelector(state => state.profile);
    let friend = useSelector(state => state.friendProfile);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = paths.includes('my-recipes') ? 'my-recipes' : 'profile';

    return (
        <div className="mt-3">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={`nav-link text-dark ${active === 'profile' ? 'active' : ''}`}
                          to={`/profile/${loggedIn._id}/*`}>
                        <h5 className={`${active === 'profile' ? 'fw-bolder' : ''}`}>
                            Profile
                        </h5>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link text-dark ${active === 'my-recipes' ? 'active'
                    : ''}`}
                          to={`/profile/${loggedIn._id}/my-recipes/*`}>
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
                    <Route path={`/friends/${friend._id}`}
                           element={<FriendProfileDetails/>}/>
                    <Route path={`/friends/${friend._id}`}
                           element={<FriendRecipes/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default Profile;