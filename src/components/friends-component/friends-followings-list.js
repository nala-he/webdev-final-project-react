import React from "react";
import Friend from "./friend";

const FriendsFollowingsList = ({friends}) => {
    // console.log(friends);
    
    return(
        <div className="row d-flex flex-wrap justify-content-center">
            {
                friends.map(friend => <Friend key={friend._id} friend={friend.following} relation={"folllowings"}/>)
            }
        </div>
    );
};
export default FriendsFollowingsList;