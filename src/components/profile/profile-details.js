import React from "react";
import users from "../../../src/data/average-user.json";

const user = users[0];

const ProfileDetails = () => {
    return (
        <div className="m-0">
            <div className="row row-cols-12 d-flex justify-content-center align-items-center">
                <div className="col-4">
                    <img className="wd-avatar m-3"
                         src={`/images/${user.avatar}`}/>
                </div>
                <div className="col-6">
                    <div>
                        <span className="fw-bold wd-profile-text">{user.userName} </span>
                    </div>
                    <div className="wd-profile-text">@{user.handle}</div>
                    <div className="wd-profile-text">{user.type}</div>
                </div>
                <div className="col-2">
                    <button type="button"
                            className="wd-edit-button border rounded-3 float-end me-3
                            ps-3 pe-3 pt-1 pb-1">
                        Edit
                    </button>
                </div>
            </div>
            <div className="m-3">
                <div className="p-3 border w-100 rounded-3 wd-bio overflow-auto">{user.bio}</div>
            </div>
            <div className="m-3">
                <ul className="p-0 wd-profile-buttons">
                    <li>
                        <button type="button"
                                className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1 ">
                            <div className="wd-text-sm">{user.followers}</div>
                            <div className="wd-text-sm">Followers</div>
                        </button>
                    </li>
                    <li>
                        <button type="button"
                                className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1">
                            <div className="wd-text-sm">{user.followings}</div>
                            <div className="wd-text-sm">Followings</div>
                        </button>
                    </li>
                    <li>
                        <button type="button"
                                className="wd-edit-button border rounded-3
                            ps-3 pe-3 pt-1 pb-1">
                            <div className="wd-text-sm">{user.savedRecipes}</div>
                            <div className="wd-text-sm">Saved Recipes</div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default ProfileDetails;