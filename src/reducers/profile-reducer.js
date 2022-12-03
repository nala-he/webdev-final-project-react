import {createSlice} from "@reduxjs/toolkit";
import {findUserByIdThunk, updateUserThunk} from "../services/users-thunks";

// import users from "../data/registered_users.json";
//
// const loggedIn = users[0];
const initialState = {
    "username": "",
    "firstName": "",
    "lastName": "",
    "type": "REG USER",
    "avatar": "",
    "bio": "",
    "business": "",
    "password": ""
}

const profileSlice = createSlice({
     name: "profile",
     initialState,
     // extraReducers: {
     //     // [findUserByIdThunk.fulfilled]:
     //     //     (state, {payload}) => {
     //     //         state = payload;
     //     //     },
     //     [updateUserThunk.fulfilled]:
     //         (state, {payload}) => {
     //             return {...state, ...payload}
     //         }
     // },
     reducers: {
         updateProfile(state, action) {
             return {...state, ...action.payload}
         },
         resetProfile(state) {
             return {...state, ...initialState}
         }
     }
});
export const {updateProfile, resetProfile} = profileSlice.actions;
export default profileSlice.reducer;