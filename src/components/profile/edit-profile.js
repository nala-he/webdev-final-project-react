import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {updateProfile} from "../../reducers/profile-reducer";
import {updateUserThunk} from "../../services/users-thunks";
import {findUsersThunk} from "../../services/users-thunks";

import "./index.css";

const EditProfile = () => {
    // const profile = useSelector(state => state.profile);
    const {currentUser} = useSelector(state => state.usersData);
    let [editedProfile, setEditedProfile] = useState(currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const saveClickHandler = () => {
        try {
            console.log(editedProfile);
            dispatch(updateUserThunk(editedProfile))
            console.log(currentUser);
        } catch (e) {
            navigate("/login");
        }
        
    }
    let profile = currentUser;
    
    return (
        <div className="mt-3 wd-edit-background">
            <div className="row d-flex align-items-center pt-1">
                <div className="float-start col-6">
                    {/*Exit button*/}
                    <Link to={`/profile`}>
                        <i className="bi bi-x wd-icon-large text-black ms-2"> </i>
                    </Link>
                </div>
                <div className="float-end col-6">
                    {/*Profile save button*/}
                    <Link to={`/profile`}>
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
                            <input type="text" className="wd-edit-input" placeholder="firstname"
                                   title="firstname"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, firstName: e.target.value})
                                   }}
                                   value={editedProfile.firstName}>
                            </input>
                        </div>
                        <div className="m-1">
                            <input type="text" className="wd-edit-input" placeholder="lastname"
                                   title="lastname"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, lastName: e.target.value})
                                   }}
                                   value={editedProfile.lastName}>
                            </input>
                        </div>
                        <div className="m-1">
                            <input type="text" placeholder="username" title="username"
                                   className="wd-edit-input"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, username: e.target.value})
                                   }}
                                   value={`${editedProfile.username}`}>
                            </input>
                        </div>
                        <div className="m-1">
                            <input type="password" placeholder="password" title="password"
                                   className="wd-edit-input"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, password: e.target.value})
                                   }}
                                   value={`${editedProfile.password}`}>
                            </input>
                        </div>
                        <div className="m-1">
                            <input type="url" placeholder="avatar image url" title="avatar image url"
                                   className="wd-edit-input"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, avatar: e.target.value})
                                   }}
                                   value={`${editedProfile.avatar}`}>
                            </input>
                        </div>
                        {
                            editedProfile.type === "PRO CHEF" &&
                            <div className="m-1">
                                <input className="wd-edit-input"
                                       type="text"
                                       placeholder="business website"
                                       title="business website"
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