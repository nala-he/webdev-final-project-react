import {React, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import ProfileDetails from "./profile-details";
// import MyRecipes from "./my-recipes";
// import EditProfile from "./edit-profile";
// import MyRecipeDetails from "../recipe-details/my-recipe-details";
import "./index.css";
// import * as service from "../../services/auth-service";
import {useNavigate} from "react-router-dom";
import {findUserByIdThunk} from "../../services/users-thunks";

const Profile = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = paths.includes('my-recipes') ? 'my-recipes' : 'profile';

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.usersData);
    const [profile, setProfile] = useState(currentUser);

    useEffect(() => {
        try {
            dispatch(findUserByIdThunk(currentUser._id))
                .then(setProfile(currentUser))
        }
        catch(e) {
            navigate('/login');
        }
    }, []);

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
                <ProfileDetails/>
                {/*<Routes>*/}
                {/*    <Route index element={<ProfileDetails/>}/>*/}
                {/*    /!*moved below to fridge/index.js*!/*/}
                {/*    /!*<Route path="/my-recipes" element={<MyRecipes/>}/>*!/*/}
                {/*    /!*<Route path="/edit" element={<EditProfile/>}/>*!/*/}
                {/*    /!*<Route path="/my-recipes/details" element={<MyRecipeDetails/>}/>*!/*/}
                {/*</Routes>*/}
            </div>
        </div>
    );
}
export default Profile;