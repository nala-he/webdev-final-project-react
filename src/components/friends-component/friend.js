import {React} from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {updateFriendProfile} from "../../reducers/friend-profile-reducer";
import {findRecipesByAuthorThunk} from "../../services/recipes-thunk";

// import {updateFriendRecipe} from "../../reducers/friend-recipes-reducer";
// import {findUserByIdThunk} from "../../services/users-thunks";
// import {useNavigate} from "react-router-dom";

const Friend = ({friend, relation}) => {
    const dispatch = useDispatch();

    const profileClickHandler = () => {
        dispatch(updateFriendProfile(friend));
    }
    
    const {currentUser} = useSelector(state => state.usersData);
    
    const {recipes} = useSelector(state => state.recipes);
    // function for future implementation
   
    // const avatarClickHandler = () => {
    //     dispatch(findRecipesByAuthorThunk(friend._id));
    // }
    
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const last = paths[paths.length - 1];
    

    // let recipesNum = recipes.length;
    
    return (
        <div className="flex-fill col-5 col-lg-5 col-xl-3 m-2 border border-2
                        rounded-4 wd-bg-beige d-flex flex-column">
            {friend && 
                <>
                    <div>
                        {/* avatar */}
                        <div className="d-flex justify-content-center">
                            {
                                (!friend.avatar) &&
                                <img className="wd-circle-avatar mt-2 border border-3"
                                     alt="avatar"
                                     src={`/images/emptyAvatar.png`}
                                />
                            }
                            {
                                friend.avatar && friend.avatar.includes("http") &&
                                <img className="wd-circle-avatar mt-2 border border-3"
                                     src={friend.avatar} alt="avatar"
                                />
                            }
                            {
                                friend.avatar && !friend.avatar.includes("http") &&
                                <img className="wd-circle-avatar mt-2 border border-3"
                                     alt="avatar"
                                     src={`/images/${friend.avatar}`}
                                />
                            }
                        </div>

                        {/* name */}
                        <div className="mt-2">
                            <h6 className="text-center text-wrap text-break">
                                {`${friend.firstName} ${friend.lastName} `}
                                {friend.type === "REG USER" ? <i className="fa-solid fa-drumstick-bite"></i> : ''}
                                {friend.type === "RECIPE CREATOR" ? <i className="fa-solid fa-file-pen"></i> : ''}
                                {friend.type === "PRO CHEF" ? <i className="fa-solid fa-bell-concierge"></i> : ''}
                            </h6>
                            {/*<div className="text-center">*/}
                            {/*    {*/}
                            {/*        friend.type !== "REG USER" && recipesNum !== 0 */}
                            {/*        && `${recipesNum} recipes`*/}
                            {/*    }*/}
                            {/*</div>*/}
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
                                    <Link to={friend._id !== currentUser._id 
                                              ? `../profile/${friend._id}` 
                                              : `../../profile`}>
                                        <button className="btn wd-btn-grey rounded-4 m-1 text-dark 
                                        fw-bold wd-font-14" onClick={profileClickHandler}>
                                            Profile
                                        </button>
                                    </Link>
                                    {
                                        friend.type !== "REG USER" &&
                                        <Link to={friend._id !== currentUser._id 
                                                  ? `../profile/${friend._id}/my-recipes` 
                                                  : `../../profile/my-recipes` }>
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
                                paths.length === 3 && last !== "followers" &&
                                <>
                                    <Link to={friend._id !== currentUser._id ? `../profile/${friend._id}` 
                                                                             : `../../profile`}>
                                        <button className="btn wd-btn-grey rounded-4 m-1 text-dark 
                                        fw-bold wd-font-14" onClick={profileClickHandler}>
                                            Profile
                                        </button>
                                    </Link>
                                    {
                                        friend.type !== "REG USER" &&
                                        <Link to={friend._id !== currentUser._id 
                                                  ? `../profile/${friend._id}/my-recipes` 
                                                  : `../../profile/my-recipes`}>
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