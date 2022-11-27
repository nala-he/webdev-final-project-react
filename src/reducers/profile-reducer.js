import {createSlice} from "@reduxjs/toolkit";
import users from "../data/average-user.json";

const loggedIn = users[0];

const profileSlice = createSlice({
     name: "profile",
     initialState: loggedIn,
     reducers: {
         updateProfile(state, action) {
             return {...action.payload}
         }
     }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;