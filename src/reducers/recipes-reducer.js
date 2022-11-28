import {createSlice} from "@reduxjs/toolkit";
import recipes from "../data/recipes.json";

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: recipes,
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