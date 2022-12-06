import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useLocation, useParams} from "react-router";
import {updateFriendProfile} from "../../reducers/friend-profile-reducer";

// import {updateFriendRecipe} from "../../reducers/friend-recipes-reducer";
// import {findUserByIdThunk} from "../../services/users-thunks";
// import {useNavigate} from "react-router-dom";

const Friend = ({friend, relation}) => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const profileClickHandler = () => {
        dispatch(updateFriendProfile(friend));
    }
    
    // console.log(friend);
    
    // function for future implementation
    // const recipeClickHandler = () => {
    //     dispatch(updateFriendRecipe(findRecipesCreatedByUser(friend._id)));
    // }
    
    const {pathname} = useLocation()
    const paths = pathname.split('/');
    // const last = paths[2];
    const last = paths[paths.length - 1];
    
  
    if (paths.length === 3 && last === "followers") {
        
    }

    // hardcoded, need to update after combined with my-recipes data
    const recipesNum = 10;
    

    return (
        <div className="flex-fill col-5 col-lg-5 col-xl-3 m-2 border border-2
                        rounded-4 wd-bg-beige d-flex flex-column">
            {friend && 
                <>
                    <div>
                        {/* avatar */}
                        <div className="d-flex justify-content-center">
                            <img src={`/images/${friend.avatar}`}
                                 className="wd-circle-avatar mt-2 border border-3"
                                 alt="avatar"/>
                        </div>

                        {/* name */}
                        <div className="mt-2">
                            <h6 className="text-center text-wrap text-break">
                                {`${friend.firstName} ${friend.lastName} `}
                                {friend.type === "REG USER" ? <i className="fa-solid fa-drumstick-bite"></i> : ''}
                                {friend.type === "RECIPE CREATOR" ? <i className="fa-solid fa-file-pen"></i> : ''}
                                {friend.type === "PRO CHEF" ? <i className="fa-solid fa-bell-concierge"></i> : ''}
                            </h6>
                            <div className="text-center">
                                {
                                    friend.type !== "REG USER" && `${recipesNum} recipes`
                                }
                            </div>
                        </div>
                    </div>

                    {/* buttons (profile/recipes) */}
                    <div className="mt-auto">
                        <div className="d-flex justify-content-center mt-1 mb-2">
                            {
                                // e.g. localhost:3000/friends/followers
                                paths.length === 3 && last === "followers" &&
                                <>
                                    <Link to={`../profile/${friend._id}`}>
                                        <button className="btn wd-btn-grey rounded-4 m-1 text-dark 
                                    fw-bold wd-font-14" onClick={profileClickHandler}>
                                            Profile
                                        </button>
                                    </Link>
                                    {
                                        friend.type !== "REG USER" &&
                                        <Link to={`../profile/${friend._id}/my-recipes`}>
                                            <button className="btn wd-btn-grey rounded-4 m-1 
                                            text-dark fw-bold wd-font-14">
                                                Recipes
                                            </button>
                                        </Link>
                                    }
                                </>
                            }
                            {
                                // e.g. localhost:3000/friends
                                paths.length === 2 && 
                                <>
                                    <Link to={`../friends/profile/${friend._id}`}>
                                        <button className="btn wd-btn-grey rounded-4 m-1 text-dark 
                                        fw-bold wd-font-14" onClick={profileClickHandler}>
                                            Profile
                                        </button>
                                    </Link>
                                    {
                                        friend.type !== "REG USER" &&
                                        <Link to={`../friends/profile/${friend._id}/my-recipes`}>
                                            <button className="btn wd-btn-grey rounded-4 m-1 
                                            text-dark fw-bold wd-font-14">
                                                Recipes
                                            </button>
                                        </Link>
                                    }
                                </>
                            }
                            {
                                // e.g. localhost:3000/friends/:uid/followers
                                paths.length === 4 && 
                                <>
                                    <Link to={`../../profile/${friend._id}`}>
                                        <button className="btn wd-btn-grey rounded-4 m-1 text-dark 
                                        fw-bold wd-font-14" onClick={profileClickHandler}>
                                            Profile
                                        </button>
                                    </Link>
                                    {
                                        friend.type !== "REG USER" &&
                                        <Link to={`../../profile/${friend._id}/my-recipes`}>
                                            <button className="btn wd-btn-grey rounded-4 m-1 
                                            text-dark fw-bold wd-font-14">
                                                Recipes
                                            </button>
                                        </Link>
                                    }
                                </>
                            }
                            {
                                // e.g. localhost:3000/friends/:uid
                                paths.length === 3 && last != "followers" &&
                                <>
                                    <Link to={`../profile/${friend._id}`}>
                                        <button className="btn wd-btn-grey rounded-4 m-1 text-dark 
                                        fw-bold wd-font-14" onClick={profileClickHandler}>
                                            Profile
                                        </button>
                                    </Link>
                                    {
                                        friend.type !== "REG USER" &&
                                        <Link to={`../profile/${friend._id}/my-recipes`}>
                                            <button className="btn wd-btn-grey rounded-4 m-1 
                                            text-dark fw-bold wd-font-14">
                                                Recipes
                                            </button>
                                        </Link>
                                    }
                                </>
                            }
                            {/*<Link to={`${last !== "followers"*/}
                            {/*             ? `../friends/profile/${friend._id}`*/}
                            {/*             : `../profile/${friend._id}`}`}>*/}
                            {/*    <button className="btn wd-btn-grey rounded-4 m-1 text-dark fw-bold wd-font-14"*/}
                            {/*            onClick={profileClickHandler}>*/}
                            {/*        Profile*/}
                            {/*    </button>*/}
                            {/*</Link>*/}
                            {/*{*/}
                            {/*    friend.type !== "REG USER" &&*/}
                            {/*    <Link to={`${last !== "followers"*/}
                            {/*                 ? `../friends/profile/${friend._id}/my-recipes`*/}
                            {/*                 : `../profile/${friend._id}/my-recipes`}`}>*/}
                            {/*        <button className="btn wd-btn-grey rounded-4 m-1 text-dark fw-bold wd-font-14">*/}
                            {/*            Recipes*/}
                            {/*        </button>*/}
                            {/*    </Link>*/}
                            {/*}*/}
                        </div>
                    </div>
                </>
            }
        </div>
    );
};
export default Friend;