import {createSlice} from "@reduxjs/toolkit";
import { findAllRecipesThunk, findRecipesByAuthorThunk, createRecipeThunk,deleteRecipeThunk, updateRecipeThunk } from "../services/recipes-thunk";

const initialState = {
    recipes: []
}

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: {
        [findRecipesByAuthorThunk.pending]:
            (state) => {
                state.recipes = [];
            },
        [findRecipesByAuthorThunk.fulfilled]:
            (state, {payload}) => {
                state.recipes = payload;
            },
        [findAllRecipesThunk.fulfilled]:
            (state, {payload}) => {
                state.recipes = payload;
            },
        [createRecipeThunk.fulfilled]:
            (state, {payload}) => {
                state.recipes.push({...payload});
            },
        [deleteRecipeThunk.fulfilled]:
            (state, {payload}) => {
                state.recipes = state.recipes.filter(recipe => recipe._id !== payload);
            },
        [updateRecipeThunk.fulfilled]:
            (state, {payload}) => {
                const ndx = state.recipes.length - 1;
                state.recipes[ndx] = {
                    ...state.recipes[ndx],
                    ...payload.newRecipe
                }
            }
    },
    reducers: {
        createRecipe(state, action) {
            state.push({
                ...action.payload,
                _id: (new Date()).getTime() + ""
            })
        },
    }
});

export const {createRecipe} = recipesSlice.actions;
export default recipesSlice.reducer;