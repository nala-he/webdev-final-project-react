import React, {useEffect, useState} from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import {useLocation} from "react-router";
import FriendsList from "./friends-list";
import followings from "../../data/followings.json";
import followers from "../../data/followers.json";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../../services/users-thunks";
import {useNavigate, Navigate} from "react-router-dom";

const FriendsComponent = () => {
    let loggedIn = useSelector(state => state.profile);
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const friend = paths[3];

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.usersData);

    useEffect(() => {
        try {
            dispatch(findUserByIdThunk(currentUser._id))
        }
        catch(e) {
            navigate('/login');
        }
    }, []);

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
            <div className="mt-3">
                <ul className="nav nav-tabs nav-fill">
                    <li className="nav-item">
                        <Link className={`nav-link text-dark fs-5 
                                        ${friend === undefined ? 'active fw-bold' : ''}`}
                              to={`/friends/${loggedIn._id}`}>
                            Following
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link text-dark fs-5 
                                        ${friend === 'followers' ? 'active fw-bold' : ''}`}
                              to={`/friends/${loggedIn._id}/followers`}>
                            Followers
                        </Link>
                    </li>
                </ul>
                <div className="border border-top-0 ps-3 pe-3 pt-1 pb-1">
                    <Routes>
                        <Route path="/"
                               element={<FriendsList friends={followings}/>}/>
                        <Route path="/followers"
                               element={<FriendsList friends={followers}/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};
export default FriendsComponent;