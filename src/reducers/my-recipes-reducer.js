import {createSlice} from "@reduxjs/toolkit";
import myRecipes from "../data/my-recipes.json";

const myRecipesSlice = createSlice({
                                     name: 'myRecipes',
                                     initialState: myRecipes
                                 });

export default myRecipesSlice.reducer;