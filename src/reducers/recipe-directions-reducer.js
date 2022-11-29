import {createSlice} from "@reduxjs/toolkit";
import recipeDirections from "../data/recipe-directions.json";

const recipeDirectionsSlice = createSlice({
    name: "recipeDirections",
    initialState: recipeDirections,
    reducers: {
        createRecipeDirection(state, action) {
            state.push({
                 ...action.payload,
                 _id: (new Date()).getTime() + "",
            })
        },
 
        deleteRecipeDirection(state, action) {
            const index = state
                .findIndex(direction =>
                direction._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const {createRecipeDirection, deleteRecipeDirection} = recipeDirectionsSlice.actions;
export default recipeDirectionsSlice.reducer;