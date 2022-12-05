import {createAsyncThunk} from "@reduxjs/toolkit";
import {findUsersIamFollowing, findUsersIamFollowedBy, followUser} from "./follows-service";

export const followUserThunk = createAsyncThunk(
    'friends/followUser',
    async (follow) => await followUser(follow)
)

export const findUsersIamFollowedByThunk = createAsyncThunk(
    'friends/findUsersIamFollowedBy',
    async (me) => await findUsersIamFollowedBy(me)
)

export const findUsersIamFollowingThunk = createAsyncThunk(
    'friends/findUsersIamFollowing',
    async (me) => await findUsersIamFollowing(me)
)