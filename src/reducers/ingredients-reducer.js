import {createSlice} from "@reduxjs/toolkit";
import ingredients from "../data/ingredients.json";
import {
    createFridgeIngredientThunk,
    deleteFridgeIngredientThunk,
    findCheckedFridgeIngredientsByUserThunk,
    findFridgeIngredientsByUserThunk
} from "../services/fridge-ingredients-thunk";

const initialState = {
    ingredients: [],
    checkedIngredients: []
}

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    extraReducers: {
        [findFridgeIngredientsByUserThunk.pending]:
            (state) => {
                state.ingredients = [];
            },
        [findFridgeIngredientsByUserThunk.fulfilled]:
            (state, {payload}) => {
                state.ingredients = payload;
            },
        [createFridgeIngredientThunk.fulfilled]:
            (state, {payload}) => {
                state.ingredients.push({...payload});
            },
        [deleteFridgeIngredientThunk.fulfilled]:
            (state, {payload}) => {
                state.ingredients = state.ingredients.filter(ingredient => ingredient._id !== payload);
            },
        [findCheckedFridgeIngredientsByUserThunk.fulfilled]:
            (state, {payload}) => {
                console.log(payload)
                state.checkedIngredients = payload;
            }
    },
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