import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";


const friendProfileSlice = createSlice({
     name: "friendProfile",
     initialState: {},
     reducers: {
         updateFriendProfile(state, action) {
             return {...action.payload}
         }
     }
 });
export const {updateFriendProfile} = friendProfileSlice.actions;
export default friendProfileSlice.reducer;