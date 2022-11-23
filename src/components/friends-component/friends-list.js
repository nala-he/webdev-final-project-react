import React from "react";
import Friend from "./friend";

const FriendsList = ({friends}) => {
    return(
        <div className="row d-flex flex-wrap justify-content-center">
            {
                friends.map(friend => <Friend key={friend._id} friend={friend}/>)
            }
        </div>
    );
};
export default FriendsList;