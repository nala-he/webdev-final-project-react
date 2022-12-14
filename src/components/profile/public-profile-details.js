import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import "./index.css";
import {findUserByIdThunk} from "../../services/users-thunks";
import {findUsersIamFollowingThunk, findUsersIamFollowedByThunk} from "../../services/friends-thunks";
import {findSavedRecipesByUserThunk} from "../../services/saved-recipes-thunk";

// profile details page for friends' profiles, no edit button, has a path "/friends/profile/:uid/*"
const PublicProfileDetails = () => {
    const {uid} = useParams();
    const {publicProfile}= useSelector(state => state.usersData);
    const {followedBy, following} = useSelector(state => state.followsData);
    const {savedRecipes} = useSelector((state) => state.savedRecipes);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            dispatch(findUserByIdThunk(uid));
            dispatch(findUsersIamFollowingThunk(uid));
            dispatch(findUsersIamFollowedByThunk(uid));
            dispatch(findSavedRecipesByUserThunk(uid));
        } catch (e) {
            navigate('/login');
        }
    }, [uid, dispatch, navigate]);

    let profile = publicProfile;
    
    // console.log(profile);

    return (
        <div className="m-0 wd-profile-background">
            {
                profile && 
                <>
                    <div className="row row-cols-12 d-flex justify-content-center align-items-center pt-3">
                        <div className="col-4">
                            {
                                (!profile.avatar) &&
                                <img className="wd-profile-avatar m-3 wd-filter"
                                     alt="avatar"
                                     src={`/images/emptyAvatar.png`}/>
                            }
                            {
                                profile.avatar && profile.avatar.includes("http") &&
                                <img className="wd-profile-avatar m-3 wd-filter"
                                     src={profile.avatar} alt="avatar"/>
                            }
                            {
                                profile.avatar && !profile.avatar.includes("http") &&
                                <img className="wd-profile-avatar m-3 wd-filter"
                                     alt="avatar"
                                     src={`/images/${profile.avatar}`}/>
                            }
                        </div>
                        <div className="col-8 mt-3">
                            <div className="text-wrap text-break">
                                {
                                    profile.firstName &&
                                    <span className="fw-bold wd-profile-text">{profile.firstName} </span>
                                }
                                {
                                    profile.lastName  &&
                                    <span className="fw-bold wd-profile-text">{profile.lastName} </span>
                                }
                                {profile.type === "REG USER" ? <i className="fa-solid fa-drumstick-bite"></i> : ''}
                                {profile.type === "RECIPE CREATOR" ? <i className="fa-solid fa-file-pen"></i> : ''}
                                {profile.type === "PRO CHEF" ? <i className="fa-solid fa-bell-concierge"></i> : ''}
                            </div>
                            <div className="wd-profile-text">@{profile.username}</div>
                            <div className="wd-profile-text">{profile.type}</div>
                            {
                                profile.type === "PRO CHEF" && profile.business &&
                                <a className="wd-profile-text" href={`${profile.business}`}>{profile.business}</a>
                            }
                        </div>
                    </div>
                    {
                        profile.bio &&
                        <div className="m-3">
                            <div className="p-3 border w-100 rounded-3 wd-bio overflow-auto">{profile.bio}</div>
                        </div>
                    }
                    <div className="m-3">
                        <ul className="p-0 wd-profile-buttons">
                            <li>
                                <Link to={`/friends/${profile._id}`}>
                                    <button type="button"
                                            className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1">
                                        {
                                            following &&
                                            <div className="wd-text-sm">{following.length}</div>
                                        }
                                        <div className="wd-text-sm">Following</div>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/friends/${profile._id}/followers`}>
                                    <button type="button"
                                            className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1 ">
                                        {
                                            followedBy &&
                                            <div className="wd-text-sm">{followedBy.length}</div>
                                        }
                                        <div className="wd-text-sm">Followers</div>
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link to={`/users/${profile._id}/saved-recipes`}>
                                    <button type="button"
                                            className="wd-edit-button border rounded-3
                                ps-3 pe-3 pt-1 pb-1">
                                        {
                                            savedRecipes &&
                                            <div className="wd-text-sm">{savedRecipes.length}</div>
                                        }                                        
                                        <div className="wd-text-sm">Saved Recipes</div>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </>
            }
        </div>
    );
}
export default PublicProfileDetails;