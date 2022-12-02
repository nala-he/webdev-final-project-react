import {createSlice} from "@reduxjs/toolkit";
import recipeDirections from "../data/recipe-directions.json";
import { createRecipeDirectionThunk, deleteRecipeDirectionThunk, findDirectionsForRecipeThunk } from "../services/recipe-directions-thunk";

const recipeDirectionsSlice = createSlice({
    name: "recipeDirections",
    initialState: recipeDirections,
    extraReducers: {
        [findDirectionsForRecipeThunk.pending]:
            (state) => {
                state = [];
            },
        [findDirectionsForRecipeThunk.fulfilled]:
            (state, {payload}) => {
                state = payload;
            },
        [createRecipeDirectionThunk.fulfilled]:
            (state, {payload}) => {
                state.push({...payload});
            },
        [deleteRecipeDirectionThunk.fulfilled]:
            (state, {payload}) => {
                state = state.filter(recipeDirection => recipeDirection._id !== payload);
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