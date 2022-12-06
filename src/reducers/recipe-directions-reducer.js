import {createSlice} from "@reduxjs/toolkit";
import recipeDirections from "../data/recipe-directions.json";
import { createRecipeDirectionThunk, deleteRecipeDirectionThunk, findDirectionsForRecipeThunk } from "../services/recipe-directions-thunk";

const initialState = {
    recipeDirections: []
}

const recipeDirectionsSlice = createSlice({
    name: "recipeDirections",
    initialState,
    extraReducers: {
        [findDirectionsForRecipeThunk.pending]:
            (state) => {
                state.recipeDirections = [];
            },
        [findDirectionsForRecipeThunk.fulfilled]:
            (state, {payload}) => {
                state.recipeDirections = payload;
            },
        [createRecipeDirectionThunk.fulfilled]:
            (state, {payload}) => {
                state.recipeDirections.push({...payload});
            },
        [deleteRecipeDirectionThunk.fulfilled]:
            (state, {payload}) => {
                state.recipeDirections = state.recipeDirections.filter(recipeDirection => recipeDirection._id !== payload);
            }
    },
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