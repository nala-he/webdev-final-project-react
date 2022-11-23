import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const FriendProfileDetails = () => {
    const friendProfile = useSelector(state => state.friendProfile);

    return (
        <div className="m-0 wd-profile-background">
            <div className="row row-cols-12 d-flex justify-content-center align-items-center">
                <div className="col-4">
                    <img className="wd-avatar m-3"
                         alt="User avatar"
                         src={friendProfile.avatar !== '' ? `/images/${friendProfile.avatar}`
                                                    : `/images/emptyAvatar.png`}/>
                </div>
                <div className="col-8">
                    <div>
                        <span className="fw-bold wd-profile-text">
                            {friendProfile.firstName} {friendProfile.lastName}</span>
                    </div>
                    <div className="wd-profile-text">@{friendProfile.username}</div>
                    <div className="wd-profile-text">{friendProfile.type}</div>
                </div>
            </div>
            <div className="m-3">
                <div className="p-3 border w-100 rounded-3 wd-bio overflow-auto">{friendProfile.bio}</div>
            </div>
            <div className="m-3">
                <ul className="p-0 wd-profile-buttons">
                    <li>
                        <Link to={`/friends/${friendProfile._id}`}>
                            <button type="button"
                                    className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1">
                                <div className="wd-text-sm">{friendProfile.followings}</div>
                                <div className="wd-text-sm">Following</div>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/friends/${friendProfile._id}/followers`}>
                            <button type="button"
                                    className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1 ">
                                <div className="wd-text-sm">{friendProfile.followers}</div>
                                <div className="wd-text-sm">Followers</div>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <button type="button"
                                className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1">
                            <div className="wd-text-sm">{friendProfile.savedRecipes}</div>
                            <div className="wd-text-sm">Saved Recipes</div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default FriendProfileDetails;