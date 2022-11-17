import {createSlice} from "@reduxjs/toolkit";
import recipes from "../data/recipes.json";

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: recipes
});

export default recipesSlice.reducer;