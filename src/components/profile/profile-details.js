import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import "./index.css";
import {findUserByIdThunk} from "../../services/users-thunks";
import {useNavigate} from "react-router-dom";
import {findUsersIamFollowingThunk, findUsersIamFollowedByThunk} from "../../services/friends-thunks";

const ProfileDetails = () => {
    const {currentUser}= useSelector(state => state.usersData);
    const [profile, setProfile] = useState(currentUser);
    
    const {followedBy, following} = useSelector(state => state.followsData);
    const [followings, setFollowings] = useState([]);
    const [followers, setFollowers] = useState([]);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        async function fetchData() {
            await dispatch(findUserByIdThunk(currentUser._id))
            await dispatch(findUsersIamFollowingThunk(currentUser))
            await dispatch(findUsersIamFollowedByThunk(currentUser))
            setProfile(currentUser)
            setFollowers(followedBy)
            setFollowings(following)
        }
        try {
            fetchData();
        } catch(e) {
            navigate('/login');
        }
    }, [currentUser, dispatch, navigate, followedBy, following]);

    return (
        <div className="m-0 wd-profile-background">
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
                        <Link to={`/friends/${profile._id}`}>
                            <button type="button"
                                    className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1">
                                {
                                    followings &&
                                    <div className="wd-text-sm">{followings.length}</div>
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
                                    followers &&
                                    <div className="wd-text-sm">{followers.length}</div>
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
                                    profile.savedRecipes &&
                                    <div className="wd-text-sm">{profile.savedRecipes}</div>
                                }
                                <div className="wd-text-sm">Saved Recipes</div>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default ProfileDetails;