import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import * as service from "./fridge-ingredients-service";

export const createFridgeIngredientThunk = createAsyncThunk(
    'create fridge ingredient',
    async (uid, ingredient) =>
        await service.createFridgeIngredient(uid, ingredient)
);

export const deleteFridgeIngredientThunk = createAsyncThunk(
    'delete fridge ingredient',
    async (ingredientId) => await service.deleteFridgeIngredient(ingredientId)
);

export const findFridgeIngredientsByUserThunk = createAsyncThunk(
    'find fridge ingredients by user',
    async (uid) => await service.findFridgeIngredientsByUser(uid)
);

export const findCheckedFridgeIngredientsByUserThunk = createAsyncThunk(
    'find checked fridge ingredients by user',
    async (uid) => await service.findCheckedFridgeIngredientsByUser(uid)
);