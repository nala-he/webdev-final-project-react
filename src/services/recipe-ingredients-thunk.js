import * as service from "./recipe-ingredients-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const createRecipeIngredientThunk = createAsyncThunk(
    'create recipe ingredient',
    async (ingredient) => await service.createRecipeIngredient(ingredient)
);

export const deleteRecipeIngredientThunk = createAsyncThunk(
    'delete recipe ingredient',
    async (ingredientId) => {
        await service.deleteRecipeIngredient(ingredientId);
        return ingredientId;
    }
);

export const findIngredientsForRecipeThunk = createAsyncThunk(
    'find ingredient recipes',
    async (recipeId) => await service.findIngredientsForRecipe(recipeId)
);