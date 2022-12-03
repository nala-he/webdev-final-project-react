import {createSlice} from "@reduxjs/toolkit";
import {
    createSavedRecipeThunk, deleteSavedRecipeByUserAndRecipeIdThunk,
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
         [deleteSavedRecipeByUserAndRecipeIdThunk.fulfilled]:
             (state, {payload}) => {
                 const {uid, rid} = payload;
                 const index = state.savedRecipes
                     .findIndex(recipe => recipe.savedBy === uid && recipe.recipe === rid);
                 state.savedRecipes.splice(index, 1);
             }
     }
 });

export default savedRecipesSlice.reducer;