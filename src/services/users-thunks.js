import {createAsyncThunk} from "@reduxjs/toolkit";
import * as usersService from "./users-service";

export const findUsersThunk = createAsyncThunk(
    'users/findUsers', async () => 
        await usersService.findUsers()
)

export const findUserByIdThunk = createAsyncThunk(
    'users/findUserById', async (uid) => 
        await usersService.findUserById(uid)
)

export const createUserThunk = createAsyncThunk(
    'users/createUser', async (user) => {
            return await usersService.createUser(user);
    }
)

export const updateUserThunk = createAsyncThunk(
    'users/updateUser', async (user) =>
        await usersService.updateUser(user)
)

export const deleteUserThunk = createUserThunk(
    'users/deleteUser', async (uid) => 
        await usersService.deleteUser(uid)
)