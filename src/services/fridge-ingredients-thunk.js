import * as service from "./fridge-ingredients-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const createFridgeIngredientThunk = createAsyncThunk(
    'create fridge ingredient',
    async (newIngredient) => {
        const {uid, ingredient} = newIngredient;
        const addedIngredient = await service.createFridgeIngredient(uid, ingredient);
        return addedIngredient;
    }
);

export const deleteFridgeIngredientThunk = createAsyncThunk(
    'delete fridge ingredient',
    async (ingredientId) => {
        await service.deleteFridgeIngredient(ingredientId);
        return ingredientId;
    }
);

export const findFridgeIngredientsByUserThunk = createAsyncThunk(
    'find fridge ingredients by user',
    async (uid) => await service.findFridgeIngredientsByUser(uid)
);

export const findCheckedFridgeIngredientsByUserThunk = createAsyncThunk(
    'find checked fridge ingredients by user',
    async (uid) => await service.findCheckedFridgeIngredientsByUser(uid)
);