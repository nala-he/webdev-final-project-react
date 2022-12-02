import {createSlice} from "@reduxjs/toolkit";
import {findUsersThunk, findUserByIdThunk, updateUserThunk} 
    from "../services/users-thunks";

const initialState = []

const usersSlice = createSlice({
                                   name: "users",
                                   initialState,
                                   extraReducers: {
                                       [findUsersThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state = payload
                                           },
                                       [findUserByIdThunk.fulfilled]:
                                           (state, {payload}) => {
                                                state.push(payload);
                                           },
                                       [updateUserThunk.fulfilled]:
                                           (state, {payload}) => {
                                               const userIndex = state
                                                   .findIndex((u) => u._id === payload._id)
                                               state[userIndex] = {
                                                   ...state[userIndex],
                                                   ...payload
                                               }
                                           }
                                   }
                               });
export default usersSlice.reducer;