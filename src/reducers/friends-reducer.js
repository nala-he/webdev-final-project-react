import {createSlice} from "@reduxjs/toolkit";
import {findUsersIamFollowedByThunk, findUsersIamFollowingThunk, followUserThunk} from "./follows-thunks";

const followsReducer = createSlice({
   name: 'friends',
   initialState: {
       followedBy: [],
       following: []
   },
   extraReducers: {
       [followUserThunk.fulfilled]: (state, {payload}) => {
           state.followers.push(payload)
       },
       [findUsersIamFollowedByThunk.fulfilled]: (state, {payload}) => {
           state.followedBy = payload
       },
       [findUsersIamFollowingThunk.fulfilled]: (state, {payload}) => {
           state.following = payload
       },
   }
})

export default followsReducer.reducer;