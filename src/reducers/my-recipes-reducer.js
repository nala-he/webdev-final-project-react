import {createSlice} from "@reduxjs/toolkit";
import myRecipes from "../data/my-recipes.json";

const myRecipesSlice = createSlice({
    name: 'myRecipes',
    initialState: myRecipes,
    reducers: {
        updateMyRecipe(state, action) {
            return {...action.payload}
        },
        deleteMyRecipe(state, action) {
            const index = state
                .findIndex(recipe =>
                               recipe._id === action.payload);
            state.splice(index, 1);
        }
    }
 });
export const {updateMyRecipe, deleteMyRecipe} = myRecipesSlice.actions;
export default myRecipesSlice.reducer;