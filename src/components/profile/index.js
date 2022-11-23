import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import ProfileDetails from "./profile-details";
import "./index.css";

const Profile = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = paths[paths.length - 1];

    return (
        <div className="mt-3">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={`nav-link text-dark ${active === 'profile' ? 'active' : ''}`}
                          to="/profile">
                        <h5 className={`${active === 'profile' ? 'fw-bolder' : ''}`}>
                            Profile
                        </h5>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link text-dark ${active === 'my-recipes' ? 'active'
                    : ''}`}
                          to="/profile/my-recipes">
                        <h5 className={`${active === 'my-recipes' ? 'fw-bolder' : ''}`}>
                            My Recipes
                        </h5>
                    </Link>
                </li>
            </ul>
            <div className="wd-profile-background">
                <ProfileDetails/>
            </div>
        </div>
    );
}
export default Profile;