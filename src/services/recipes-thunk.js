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

export const deleteInvalidRecipesThunk = createAsyncThunk(
    'delete invalid recipes',
    async () => await service.deleteInvalidRecipes()
);

export const updateRecipeThunk = createAsyncThunk(
    'update recipe',
    async (recipe) => {
        const {rid, newRecipe} = recipe;
        await service.updateRecipe(rid, newRecipe);
        return recipe;
    }
);

export const findAllRecipesThunk = createAsyncThunk(
    'find all recipes',
    async () => await service.findRecipes()
);

export const findRecipesByAuthorThunk = createAsyncThunk(
    'find recipes by author',
    async (uid) => await service.findRecipesByAuthor(uid)
);

export const findRecipeById = createAsyncThunk(
    'find recipe by id',
    async (rid) => await service.findRecipeById(rid)
);