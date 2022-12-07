import {createSlice} from "@reduxjs/toolkit";
import {findUsersIamFollowedByThunk, findUsersIamFollowingThunk, followUserThunk} 
    from "../services/friends-thunks";

const followsReducer = createSlice({
   name: 'friends',
   initialState: {
       followedBy: [],
       following: []
   },
   extraReducers: {
       [followUserThunk.fulfilled]: (state, {payload}) => {
           state.followedBy.push(payload)
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