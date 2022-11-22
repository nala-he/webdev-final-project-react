import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

const Friend = ({friend}) => {
    return (
        <div className="flex-fill col-5 col-lg-5 col-xl-3 m-2 border border-2
                        rounded-4 wd-bg-beige">
            <div className="d-flex justify-content-center">
                <img src={`/images/${friend.avatar}`}
                     className="wd-circle-avatar mt-2 border border-3"/>
            </div>
            <div className="mt-2">
                <h6 className="text-center text-wrap text-break">
                    {`${friend.firstName} ${friend.lastName} `}
                    {friend.type === "REG USER" ? <i className="fa-solid fa-drumstick-bite"></i> : ''}
                    {friend.type === "RECIPE CREATOR" ? <i className="fa-solid fa-file-pen"></i> : ''}
                    {friend.type === "PRO CHEF" ? <i className="fa-solid fa-bell-concierge"></i> : ''}
                </h6>
                <div className="text-center">
                    {
                        friend.recipes && `${friend.recipes} recipes`
                    }
                </div>
                <div className="d-flex justify-content-center flex-wrap mt-1 mb-2">
                    <Link to={`/profile/${friend._id}`}>
                        <button className="btn wd-btn-grey rounded-4 m-1 text-dark fw-bold wd-font-14">
                            Profile
                        </button>
                    </Link>
                    {
                        friend.recipes &&
                        <Link to={`/profile/${friend._id}/recipes`}>
                            <button className="btn wd-btn-grey rounded-4 m-1 text-dark fw-bold wd-font-14">
                                Recipes
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};
export default Friend;