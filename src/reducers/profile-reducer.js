import {createSlice} from "@reduxjs/toolkit";
// import users from "../data/registered_users.json";
//
// const loggedIn = users[0];
const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    type: "REG USER",
    avatar: "emptyAvatar.png",
    bio: "",
    business: "",
    password: ""
}

const profileSlice = createSlice({
     name: "profile",
     initialState,
     reducers: {
         updateProfile(state, action) {
             return {...state, ...action.payload}
         },
         resetProfile(state) {
             return {...state, ...initialState};
         }
     }
});
export const {updateProfile, resetProfile} = profileSlice.actions;
export default profileSlice.reducer;