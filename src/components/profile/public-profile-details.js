import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useLocation} from "react-router";
import "./index.css";
// import * as service from "../../services/auth-service";
// import {findUsersThunk} from "../../services/users-thunks";

const PublicProfileDetails = () => {
    let loggedIn = useSelector(state => state.profile);
    let friend = useSelector(state => state.friendProfile);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let profile = paths.includes(loggedIn._id) ? loggedIn : friend;

    // let friend = useSelector(state => state.friendProfile);
    // const {pathname} = useLocation();
    // const paths = pathname.split('/');
    //
    // const dispatch = useDispatch();
    // const {loggedIn, loading}= useSelector(state => state.usersData);
    // const [loggedIn, setLoggedIn] = useState({});
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const user = await service.profile();
    //         await dispatch(findUsersThunk());
    //         const updatedUser = await users.filter(u => u._id === user._id)[0];
    //         setLoggedIn(updatedUser);
    //         console.log(updatedUser);
    //     }
    //     fetchData().catch(console.e);
    //
    // }, []);
    //
    // let profile = paths.includes(loggedIn._id) ? loggedIn : friend;
    console.log(profile);

    return (
        <div className="m-0 wd-profile-background">
            <div className="row row-cols-12 d-flex justify-content-center align-items-center pt-3">
                <div className="col-4">
                    {
                        profile.avatar.includes("http") &&
                        <img className="wd-profile-avatar m-3 wd-filter"
                             src={profile.avatar} alt="avatar"/>
                    }
                    {
                        !profile.avatar.includes("http") &&
                        <img className="wd-profile-avatar m-3 wd-filter"
                             alt="avatar"
                             src={profile.avatar !== '' ? `/images/${profile.avatar}`
                                                        : `/images/emptyAvatar.png`}/>
                    }
                </div>
                <div className="col-8 mt-3">
                    <div className="text-wrap text-break">
                        <span className="fw-bold wd-profile-text">
                            {profile.firstName} {profile.lastName} </span>
                        {profile.type === "REG USER" ? <i className="fa-solid fa-drumstick-bite"></i> : ''}
                        {profile.type === "RECIPE CREATOR" ? <i className="fa-solid fa-file-pen"></i> : ''}
                        {profile.type === "PRO CHEF" ? <i className="fa-solid fa-bell-concierge"></i> : ''}
                    </div>
                    <div className="wd-profile-text">@{profile.username}</div>
                    <div className="wd-profile-text">{profile.type}</div>
                    {
                        profile.type === "PRO CHEF" &&
                        <a className="wd-profile-text" href={`${profile.business}`}>{profile.business}</a>
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
                        <Link to={`/users/${profile._id}/saved-recipes`}>
                            <button type="button"
                                    className="wd-edit-button border rounded-3
                                ps-3 pe-3 pt-1 pb-1">
                                <div className="wd-text-sm">{profile.savedRecipes}</div>
                                <div className="wd-text-sm">Saved Recipes</div>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default PublicProfileDetails;