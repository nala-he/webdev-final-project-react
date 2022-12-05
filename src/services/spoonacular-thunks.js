import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "../services/spoonacular-service";

export const findRecipesByIngredientsThunk = createAsyncThunk(
    'findRecipesByIngredients',
    async (ingredients) => await service.findRecipesByIngredients(ingredients)
)