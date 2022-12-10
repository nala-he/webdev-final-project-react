import * as service from "../services/saved-recipes-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const createSavedRecipeThunk = createAsyncThunk(
    'create saved recipe',
    async (ids) => {
        const {uid, rid} = ids;
        const savedRecipe = await service.createSavedRecipe(uid, rid);
        return savedRecipe;
    }
);

export const createSavedSpoonacularRecipeThunk = createAsyncThunk(
    'create saved spoonacular recipe',
    async (ids) => {
        const {uid, rid} = ids;
        const savedSpoonacular = await service.createSavedSpoonacularRecipe(uid, rid);
        return savedSpoonacular;
    }
);

export const findSavedRecipesByUserThunk = createAsyncThunk(
    'find saved recipes by user',
    async (uid) => await service.findSavedRecipesByUser(uid)
);

export const findSavedSpoonacularRecipesByUserThunk = createAsyncThunk(
    'find saved spoonacular recipes by user',
    async (uid) => await service.findSavedSpoonacularRecipesByUser(uid)
);

export const deleteSavedRecipeThunk = createAsyncThunk(
    'delete saved recipe',
    async (savedRecipeId) => {
        await service.deleteSavedRecipe(savedRecipeId);
        return savedRecipeId;
    }
);

export const deleteSavedRecipeByUserAndRecipeIdThunk = createAsyncThunk(
    'delete saved recipe by user and recipe id',
    async (ids) => {
        const {uid, rid} = ids;
        await service.deleteSavedRecipeByUserAndRecipeId(uid, rid);
        return ids;
    }
)