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
        }
    }
});

export const {createIngredient, ingredientCheckedToggle} = ingredientsSlice.actions;
export default ingredientsSlice.reducer;