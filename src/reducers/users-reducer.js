import {createSlice} from "@reduxjs/toolkit";
import {findUsersThunk, updateUserThunk} from "../services/users-thunks";

const initialState = {
    users: [],
    loading: false,
    currentUser: null,
    publicProfile: null
}

const usersSlice = createSlice({
   name: "users",
   initialState,
   extraReducers: {
       [findUsersThunk.pending]:
           (state, {payload}) => {
               state.loading = true;
               state.users = [];
               currentUser: null;
           },
       [findUsersThunk.fulfilled]:
           (state, {payload}) => {
               state.loading = false;
               state.users = payload;
               console.log(state.users);
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
               }
           }
   }
});
export default usersSlice.reducer;