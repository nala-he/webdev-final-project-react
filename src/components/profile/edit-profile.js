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
            <div className="row d-flex align-items-center">
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
                        <img className="wd-avatar m-3 wd-filter"
                             src={profile.avatar !== '' ? `/images/${profile.avatar}`
                                                        : `/images/emptyAvatar.png`}/>
                        {/*<i className="bi bi-camera wd-camera position-relative"></i>*/}
                    </div>
                </div>
                <div className="col-6 position-relative d-flex align-items-center">
                    <div>
                        <div className="m-1">
                            <input type="text" class="form-control" placeholder="Firstname"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, firstName: e.target.value})
                                   }}
                                   value={editedProfile.firstName}>
                            </input>
                        </div>
                        <div className="m-1">
                            <input type="text" class="form-control" placeholder="Lastname"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, lastName: e.target.value})
                                   }}
                                   value={editedProfile.lastName}>
                            </input>
                        </div>
                        <div className="m-1">
                            <input type="text" placeholder="Handle" class="form-control"
                                   onChange={(e) => {
                                       setEditedProfile({...editedProfile, username: e.target.value})
                                   }}
                                   value={`${editedProfile.username}`}>
                            </input>
                        </div>
                        <div className="m-1">
                            {/*<form type="drop-down" placeholder="Username" className="wd-input-width"*/}
                            {/*       onChange={(e) => {*/}
                            {/*           setEditedProfile({...editedProfile, type: e.target.value})*/}
                            {/*       }}*/}
                            {/*       value={editedProfile.type}>*/}
                            {/*</form>*/}
                            <select className="form-select" aria-label="Default select example">
                                <option value="REG USER" selected>
                                    REG USER</option>
                                {/*{editedProfile.type === "REG USER" && selected}*/}
                                <option value="RECIPE CREATOR">RECIPE CREATOR</option>
                                <option value="PRO CHEF">PRO CHEF</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-3">
                <textarea className="p-3 border w-100 rounded-3 overflow-auto"
                          class="form-control" rows="8"
                          onChange={(e) => {
                              setEditedProfile({...editedProfile, bio: e.target.value})
                          }}
                          placeholder="Bio">
                    {profile.bio}
                </textarea>
            </div>
        </div>
    );
}
export default EditProfile;