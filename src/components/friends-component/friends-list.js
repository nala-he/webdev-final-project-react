import React from "react";
import Friend from "./friend";

const FriendsList = ({friends}) => {
    return(
        <div className="border border-top-0 row d-flex flex-wrap justify-content-center p-2">
            {
                friends.map(friend => <Friend key={friend._id} friend={friend}/>)
            }
        </div>
    );
};
export default FriendsList;