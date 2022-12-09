import {createSlice} from "@reduxjs/toolkit";
import {
    findRecipeInfoByIdThunk,
    findRecipesByIngredientsThunk
} from "../services/spoonacular-thunks";

const initialState = {
    recipes: [],
    targetRecipe: null
}

const spoonacularReducer = createSlice({
    name: 'spoonacular',
    initialState,
    extraReducers: {
        [findRecipesByIngredientsThunk.fulfilled]:
            (state, action) => {
                state.recipes = action.payload;
                state.targetRecipe = null;
            },
        [findRecipeInfoByIdThunk.fulfilled]:
            (state, action) => {
                state.targetRecipe = action.payload;
            }
    }
})
export default spoonacularReducer.reducer;