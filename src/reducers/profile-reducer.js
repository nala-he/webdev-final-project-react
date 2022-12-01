import {createSlice} from "@reduxjs/toolkit";
// import users from "../data/registered_users.json";
//
// const loggedIn = users[0];

const profileSlice = createSlice({
     name: "profile",
     initialState: {},
     reducers: {
         updateProfile(state, action) {
             return {...state, ...action.payload}
         }
     }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;