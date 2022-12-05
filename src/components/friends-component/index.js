import React, {useEffect, useState} from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../../services/users-thunks";
import {useNavigate, Navigate} from "react-router-dom";
import FriendsFollowingsList from "./friends-followings-list";
import FriendsFollowersList from "./friends-followers-list";

const FriendsComponent = () => {
    const {currentUser, publicProfile} = useSelector(state => state.usersData);
    const {followedBy, following} = useSelector(state => state.followsData);
    
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let uid = paths[2];
    let friend = paths[3];

    // e.g. localhost:3000/friends as logged in user friends page
    if (paths.length === 2) {
        uid = currentUser._id;
    }
    // e.g. localhost:3000/friends/followers as logged in user friends followers page
    if (paths.length === 3) {
        uid = currentUser._id;
        friend = paths[2];
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState({});

    useEffect(() => {
        try {
            if (uid === currentUser._id) {
                setUser(currentUser);
            } else {
                dispatch(findUserByIdThunk(uid))
                setUser(publicProfile);
            }
        }
        catch(e) {
            navigate('/login');
        }
    }, [currentUser, dispatch, navigate, publicProfile, uid]);

    if (!currentUser) {
        return <Navigate to='/login'/>
    }
    

    return(
        <div className="m-3">
            {/* Search bar */}
            <div className="position-relative">
                <input className="ps-5 form-control rounded-pill text-dark"
                       placeholder="Search Friends"/>
                <i className="position-absolute wd-search-friends bi bi-search"></i>
            </div>

            {/* Followers/Following */}
            {
                user && followedBy && following &&
             <>
                 <div className="mt-3">
                     <ul className="nav nav-tabs nav-fill">
                         <li className="nav-item">
                             <Link className={`nav-link text-dark fs-5 
                                        ${friend === undefined ? 'active fw-bold' : ''}`}
                                   to={uid === currentUser._id ? `/friends` 
                                                                    : `/friends/${user._id}`}>
                                 Following
                             </Link>
                         </li>
                         <li className="nav-item">
                             <Link className={`nav-link text-dark fs-5 
                                        ${friend === 'followers' ? 'active fw-bold' : ''}`}
                                   to={uid === currentUser._id ? `/friends/followers` 
                                                                    : `/friends/${user._id}/followers`}>
                                 Followers
                             </Link>
                         </li>
                     </ul>
                     <div className="border border-top-0 ps-3 pe-3 pt-1 pb-1">
                         <Routes>
                             {
                                 uid === currentUser._id &&
                                 <>
                                     <Route path="/"
                                            element={<FriendsFollowingsList friends={following}/>}/>
                                     <Route path="/followers"
                                            element={<FriendsFollowersList friends={followedBy}/>}/>
                                 </>
                             }
                             {
                                 uid !== currentUser._id &&
                                 <>
                                     <Route path={`${user._id}`}
                                            element={<FriendsFollowingsList friends={following}/>}/>
                                     <Route path={`${user._id}/followers`}
                                            element={<FriendsFollowersList friends={followedBy}/>}/>
                                 </>
                             }
                         </Routes>
                     </div>
                 </div>
             </>
            }
        </div>
    );
};
export default FriendsComponent;