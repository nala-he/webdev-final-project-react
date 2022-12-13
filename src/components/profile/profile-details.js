import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./index.css";
import {findUserByIdThunk} from "../../services/users-thunks";
import {findUsersIamFollowingThunk, findUsersIamFollowedByThunk} from "../../services/friends-thunks";
import {findSavedRecipesByUserThunk, findSavedSpoonacularRecipesByUserThunk}
    from "../../services/saved-recipes-thunk";

const ProfileDetails = () => {
    const {currentUser, publicProfile}= useSelector(state => state.usersData);
    const {savedRecipes, savedSpoonaculars} = useSelector((state) => state.savedRecipes);
    
    const [profile, setProfile] = useState(currentUser);
    
    const {followedBy, following} = useSelector(state => state.followsData);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        try {
            dispatch(findUserByIdThunk(currentUser._id))
                .then(setProfile(publicProfile));
            dispatch(findUsersIamFollowingThunk(currentUser._id));
            dispatch(findUsersIamFollowedByThunk(currentUser._id));
            dispatch(findSavedRecipesByUserThunk(currentUser._id));
            dispatch(findSavedSpoonacularRecipesByUserThunk(currentUser._id));
        }
        catch(e) {
            navigate('/login');
        }
    }, [currentUser, dispatch, navigate, publicProfile]);
    // console.log(profile.avatar)

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
                        <div className="col-6 mt-3">
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
                        <div className="col-2">
                            {/*Profile edit button*/}
                            <Link to="./edit">
                                <button type="button"
                                        className="wd-edit-button border rounded-3 float-end me-3
                            ps-3 pe-3 pt-1 pb-1">
                                    Edit
                                </button>
                            </Link>
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
                                <Link to={profile._id === currentUser._id ? `/friends`
                                                                          : `/friends/${profile._id}`}>
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
                                <Link to={profile._id === currentUser._id ? `/friends/followers`
                                                                          : `/friends/${profile._id}/followers`}>
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
                                            savedRecipes && savedSpoonaculars &&
                                            <div className="wd-text-sm">{savedRecipes.length
                                                + savedSpoonaculars.length} </div>
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
export default ProfileDetails;