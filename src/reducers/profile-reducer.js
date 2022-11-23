import {createSlice} from "@reduxjs/toolkit";
import users from "../data/average-user.json";

const initialProfile = users[0];

const profileSlice = createSlice({
     name: "profile",
     initialState: initialProfile,
     reducers: {
         updateProfile(state, action) {
             return {...action.payload}
         },
     }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;