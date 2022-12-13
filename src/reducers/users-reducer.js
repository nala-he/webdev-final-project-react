import {createSlice} from "@reduxjs/toolkit";
import {findUsersThunk, findUserByIdThunk, updateUserThunk} from "../services/users-thunks";
import {loginThunk, logoutThunk, profileThunk, signupThunk} from "../services/auth-thunks";

const initialState = {
    users: [],
    loading: false,
    currentUser: null,
    publicProfile: null
}

const usersReducer = createSlice({
   name: "users",
   initialState,
   extraReducers: {
       [findUsersThunk.pending]:
           (state, {payload}) => {
               state.loading = true;
               state.users = [];
               state.currentUser = null;
           },
       [findUsersThunk.fulfilled]:
           (state, {payload}) => {
               state.loading = false;
               state.users = payload;
           },
       [findUserByIdThunk.fulfilled]:
           (state, {payload}) => {
               state.loading = false;
               state.publicProfile = payload;
           },
       [updateUserThunk.fulfilled]:
           (state, {payload}) => {
               state.loading = false;
               const userIndex = state.users
                   .findIndex((u) => u._id === payload._id)
               state.users[userIndex] = {
                   ...state.users[userIndex],
                   ...payload
               };
               state.currentUser = {...state.currentUser, ...payload};
           },
       [logoutThunk.fulfilled]: (state, action) => {
           state.currentUser = null;
       },
       [profileThunk.fulfilled]: (state, action) => {
           state.currentUser = action.payload
       },
       [signupThunk.fulfilled]: (state, action) => {
           state.currentUser = action.payload
       },
       [loginThunk.fulfilled]: (state, action) => {
           state.currentUser = action.payload
       },
   }
});
export default usersReducer.reducer;