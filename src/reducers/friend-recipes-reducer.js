import {createSlice} from "@reduxjs/toolkit";

const friendRecipesSlice = createSlice({
   name: 'friendRecipes',
   initialState: {},
   reducers: {
       updateFriendRecipe(state, action) {
           return {...action.payload}
       }
   }
});
export const {updateFriendRecipe} = friendRecipesSlice.actions;
export default friendRecipesSlice.reducer;