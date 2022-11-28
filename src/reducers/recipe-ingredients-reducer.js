import {createSlice} from "@reduxjs/toolkit";
import recipeIngredients from "../data/recipe-ingredients.json";

const recipeIngredientsSlice = createSlice({
    name: "recipeIngredients",
    initialState: recipeIngredients,
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