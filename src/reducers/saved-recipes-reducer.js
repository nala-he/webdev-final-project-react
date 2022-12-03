import {createSlice} from "@reduxjs/toolkit";
import {
    createSavedRecipeThunk,
    deleteSavedRecipeThunk,
    findSavedRecipesByUserThunk
} from "../services/saved-recipes-thunk";

const initialState = {
    savedRecipes: []
}

const savedRecipesSlice = createSlice({
     name: 'saved recipes',
     initialState,
     extraReducers: {
         [findSavedRecipesByUserThunk.fulfilled]:
             (state, {payload}) => {
                 state.savedRecipes = payload;
             },
         [createSavedRecipeThunk.fulfilled]:
             (state, {payload}) => {
                 state.savedRecipes.unshift({...payload});
             },
         [deleteSavedRecipeThunk.fulfilled]:
             (state, {payload}) => {
                 state.savedRecipes = state.savedRecipes.filter(recipe => recipe._id !== payload);
             },
     }
 });

export default savedRecipesSlice.reducer;