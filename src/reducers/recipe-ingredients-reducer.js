import {createSlice} from "@reduxjs/toolkit";
import recipeIngredients from "../data/recipe-ingredients.json";
import { createRecipeIngredientThunk, deleteRecipeIngredientThunk, findIngredientsForRecipeThunk } from "../services/recipe-ingredients-thunk";

const initialState = {
    recipeIngredients: []
}

const recipeIngredientsSlice = createSlice({
    name: "recipeIngredients",
    initialState,
    extraReducers: {
        [findIngredientsForRecipeThunk.pending]:
            (state) => {
                state.recipeIngredients = [];
            },
        [findIngredientsForRecipeThunk.fulfilled]:
            (state, {payload}) => {
                state.recipeIngredients = payload;
            },
        [createRecipeIngredientThunk.fulfilled]:
            (state, {payload}) => {
                state.recipeIngredients.push({...payload});
            },
        [deleteRecipeIngredientThunk.fulfilled]:
            (state, {payload}) => {
                state.recipeIngredients = state.recipeIngredients.filter(recipeIngredient => recipeIngredient._id !== payload);
            }
    },
    reducers: {
        createRecipeIngredient(state, action) {
            state.push({
                 ...action.payload,
                 _id: (new Date()).getTime() + "",
            })
        },
 
        deleteRecipeIngredient(state, action) {
            const index = state
                .findIndex(ingredient =>
                ingredient._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const {createRecipeIngredient, deleteRecipeIngredient} = recipeIngredientsSlice.actions;
export default recipeIngredientsSlice.reducer;