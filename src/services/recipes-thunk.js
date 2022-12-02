import * as service from "./recipes-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const createRecipeThunk = createAsyncThunk(
    'create recipe',
    async (uid) =>  await service.createRecipe(uid)
);

export const deleteRecipeThunk = createAsyncThunk(
    'delete recipe',
    async (rid) => {
        await service.deleteRecipe(rid);
        return rid;
    }
);

export const updateRecipeThunk = createAsyncThunk(
    'update recipe',
    async (recipe) => {
        const {rid, updates} = recipe;
        await service.updateRecipe(rid, updates);
        return recipe;
    }
);

export const findRecipesByAuthorThunk = createAsyncThunk(
    'find recipes by author',
    async (uid) => await service.findRecipesByAuthor(uid)
);