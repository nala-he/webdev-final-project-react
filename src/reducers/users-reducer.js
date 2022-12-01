import {createSlice} from "@reduxjs/toolkit";
import {findUsersThunk, findUsersByIdThunk, createUserThunk, updateUserThunk,
    deleteUserThunk} from "../../services/users-thunks";

const initialState = {}

const usersSlice = createSlice({
   name: "users",
   initialState,
   extraReducers: {
       [findUsersThunk.fulfilled]:
           (state, { payload }) => {
               state = payload
           },
       [findUsersThunk.fulfilled]:
           (state, { payload }) => {
               state = payload
           },
       [updateUserThunk.fulfilled]:
           (state, { payload }) => {
               const userNdx = state
                   .findIndex((t) => t._id === payload._id)
               state[userNdx] = {
                   ...state[userNdx],
                   ...payload
               }
           }
   }
});
export default usersSlice.reducer;