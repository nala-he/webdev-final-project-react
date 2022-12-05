import * as service from "./recipe-directions-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const createRecipeDirectionThunk = createAsyncThunk(
    'create recipe direction',
    async (direction) => await service.createRecipeDirection(direction)
);

export const deleteRecipeDirectionThunk = createAsyncThunk(
    'delete recipe direction',
    async (directionId) => {
        await service.deleteRecipeDirection(directionId);
        return directionId;
    }
);

export const findDirectionsForRecipeThunk = createAsyncThunk(
    'find direction recipes',
    async (recipeId) => await service.findDirectionsForRecipe(recipeId)
);