import {React, useEffect} from "react";
import {Link} from "react-router-dom";
import {Routes, Route, useLocation} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import PublicProfileDetails from "./public-profile-details";
import MyRecipes from "./my-recipes";
import RecipeDetails from "../recipe-details/recipe-detail";
import "./index.css";
// import updateProfile from "../../reducers/profile-reducer";
import {findUserByIdThunk} from "../../services/users-thunks";
import {useParams} from "react-router";

const PublicProfile = () => {
    // let friend = useSelector(state => state.friendProfile);
    const {uid} = useParams();
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = paths.includes('my-recipes') ? 'my-recipes' : 'profile';

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {publicProfile, loading}= useSelector(state => state.usersData);

    useEffect(() => {
        try {
            dispatch(findUserByIdThunk(uid));
        } catch (e) {
            navigate('/login');
        }
    }, [uid, dispatch, navigate]);

    let profile = publicProfile;
    // console.log(profile);
    return (
        <div className="mt-3">
            {
                profile && 
                <>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className={`nav-link text-dark ${active === 'profile' ? 'active' : ''}`}
                                  to={`../friends/profile/${profile._id}`}>
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
                                      to={`../friends/profile/${profile._id}/my-recipes`}>
                                    <h5 className={`${active === 'my-recipes' ? 'fw-bolder' : ''}`}>
                                        My Recipes
                                    </h5>
                                </Link>
                            </li>
                        }
                    </ul>
                </>
            }
            
            {
                loading && <h5>Loading...</h5>
            }
            <div>
                <Routes>
                    <Route index element={<PublicProfileDetails/>}/>
                    <Route path="/my-recipes" element={<MyRecipes/>}/>
                    <Route path="/my-recipes/details" element={<RecipeDetails/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default PublicProfile;