import {createAsyncThunk} from "@reduxjs/toolkit";
import {findUsersIamFollowing, findUsersIamFollowedBy, followUser} from "./friends-service";

export const followUserThunk = createAsyncThunk(
    'friends/followUser', async (follow) => 
        await followUser(follow)
)

export const findUsersIamFollowedByThunk = createAsyncThunk(
    'friends/findUsersIamFollowedBy', async (me) => {
        const response = await findUsersIamFollowedBy(me);
        // console.log(response);
        return response;
    }
        
)

export const findUsersIamFollowingThunk = createAsyncThunk(
    'friends/findUsersIamFollowing', async (me) => 
        await findUsersIamFollowing(me)
)