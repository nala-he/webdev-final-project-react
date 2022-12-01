import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../reducers/profile-reducer";
import "./index.css";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    let [showEdit, setShowEdit] = useState(false);
    let [editedProfile, setEditedProfile] = useState(profile);

    const dispatch = useDispatch();
    const saveClickHandler = () => {
        dispatch(updateProfile(editedProfile));
    }

    return (
        <div className="mt-3 wd-edit-background">
            <div className="row d-flex align-items-center pt-1">
                <div className="float-start col-6">
                    {/*Exit button*/}
                    <Link to={`/profile/${profile._id}`}>
                        <i className="bi bi-x wd-icon-large text-black ms-2"> </i>
                    </Link>
                </div>
                <div className="float-end col-6">
                    {/*Profile save button*/}
                    <Link to={`/profile/${profile._id}`}>
                        <button type="button"
                                onClick={saveClickHandler}
                                className="wd-edit-button border rounded-3 float-end me-2
                            ps-3 pe-3 pt-1 pb-1">
                            Save
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row row-cols-12">
                <div className="col-4">
                    <div className="position-relative d-flex align-items-center">
                        {
                            profile.avatar.includes("http") &&
                            <img className="wd-profile-avatar m-3 wd-filter"
                                 src={profile.avatar}/>
                        }
                        {
                            !profile.avatar.includes("http") &&
                            <img className="wd-profile-avatar m-3 wd-filter"
                                 src={profile.avatar !== '' ? `/images/${profile.avatar}`
                                                            : `/images/emptyAvatar.png`}/>
                        }
                    </div>
                </div>
                <div className="col-6 position-relative d-flex align-items-center">
                    <div>
                        <div className="m-1">
                            <input type="text" className="wd-edit-input" placeholder="Firstname"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, firstName: e.target.value})
                                   }}
                                   value={editedProfile.firstName}>
                            </input>
                        </div>
                        <div className="m-1">
                            <input type="text" className="wd-edit-input" placeholder="Lastname"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, lastName: e.target.value})
                                   }}
                                   value={editedProfile.lastName}>
                            </input>
                        </div>
                        <div className="m-1">
                            <input type="text" placeholder="Handle" className="wd-edit-input"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, username: e.target.value})
                                   }}
                                   value={`${editedProfile.username}`}>
                            </input>
                        </div>
                        <div className="m-1">
                            <input type="url" placeholder="avatar image url" className="wd-edit-input"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, avatar: e.target.value})
                                   }}
                                   value={`${editedProfile.avatar}`}>
                            </input>
                        </div>
                        {/*<div className="m-1">*/}
                        {/*    <select className="wd-edit-input"*/}
                        {/*            onChange={(e) => {*/}
                        {/*        setEditedProfile({...editedProfile, type: e.target.value})*/}
                        {/*    }}*/}
                        {/*            value={editedProfile.type}>*/}
                        {/*        <option value="REG USER">*/}
                        {/*            REG USER</option>*/}
                        {/*        <option value="RECIPE CREATOR">*/}
                        {/*            RECIPE CREATOR</option>*/}
                        {/*        <option value="PRO CHEF">*/}
                        {/*            PRO CHEF</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}
                        {
                            editedProfile.type === "PRO CHEF" &&
                            <div className="m-1">
                                <input className="wd-edit-input"
                                       type="text"
                                       placeholder="Business Link"
                                       defaultValue={`${editedProfile.business}`}></input>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="m-3">
                <textarea className="wd-edit-input" rows="8"
                          onChange={(e) => {
                              setEditedProfile({...editedProfile, bio: e.target.value})
                          }}
                          placeholder="Bio"
                          defaultValue={profile.bio}
                />
            </div>
        </div>
    );
}
export default EditProfile;