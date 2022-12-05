import {createSlice} from "@reduxjs/toolkit";
import {findRecipesByIngredientsThunk} from "../services/spoonacular-thunks";

const initialState = {
    recipes: []
}

const spoonacularReducer = createSlice({
    name: 'spoonacular',
    initialState,
    extraReducers: {
        [findRecipesByIngredientsThunk.fulfilled]:
            (state, action) => {
                state.recipes = action.payload;
            }
    }
})
export default spoonacularReducer.reducer;