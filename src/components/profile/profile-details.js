import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";

const ProfileDetails = () => {
    let loggedIn = useSelector(state => state.profile);
    let friend = useSelector(state => state.friendProfile);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let profile = paths.includes(loggedIn._id) ? loggedIn : friend;
    
    return (
        <div className="m-0 wd-profile-background">
            <div className="row row-cols-12 d-flex justify-content-center align-items-center">
                <div className="col-4">
                    <img className="wd-avatar m-3"
                         alt="User avatar"
                         src={profile.avatar !== '' ? `/images/${profile.avatar}`
                                                    : `/images/emptyAvatar.png`}/>
                </div>
                <div className="col-6">
                    <div>
                        <span className="fw-bold wd-profile-text">
                            {profile.firstName} {profile.lastName}</span>
                    </div>
                    <div className="wd-profile-text">@{profile.username}</div>
                    <div className="wd-profile-text">{profile.type}</div>
                </div>
                <div className="col-2">
                    {/*Profile edit button*/}
                    {profile._id === loggedIn._id &&
                         <Link to="./edit">
                             <button type="button"
                                     className="wd-edit-button border rounded-3 float-end me-3
                                ps-3 pe-3 pt-1 pb-1">
                                 Edit
                             </button>
                         </Link>
                    }
                </div>
            </div>
            <div className="m-3">
                <div className="p-3 border w-100 rounded-3 wd-bio overflow-auto">{profile.bio}</div>
            </div>
            <div className="m-3">
                <ul className="p-0 wd-profile-buttons">
                    <li>
                        <Link to={`/friends/${profile._id}`}>
                            <button type="button"
                                    className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1">
                                <div className="wd-text-sm">{profile.followings}</div>
                                <div className="wd-text-sm">Following</div>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/friends/${profile._id}/followers`}>
                            <button type="button"
                                    className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1 ">
                                <div className="wd-text-sm">{profile.followers}</div>
                                <div className="wd-text-sm">Followers</div>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <button type="button"
                                className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1">
                            <div className="wd-text-sm">{profile.savedRecipes}</div>
                            <div className="wd-text-sm">Saved Recipes</div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default ProfileDetails;