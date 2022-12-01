import {createSlice} from "@reduxjs/toolkit";
import ingredients from "../data/ingredients.json";

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: ingredients,
    reducers: {
        createIngredient(state, action) {
            state.push({
                ...action.payload,
                _id: (new Date()).getTime(),
            })
        },
        ingredientCheckedToggle(state, action) {
            const id = action.payload;
            const index = state.findIndex(ingredient => ingredient._id === id);
            const ingredient = state[index];
            ingredient.checked = !ingredient.checked;
        },
        deleteIngredient(state, action) {
            const index = state.findIndex(ingredient => ingredient._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const {createIngredient, ingredientCheckedToggle, deleteIngredient} = ingredientsSlice.actions;
export default ingredientsSlice.reducer;