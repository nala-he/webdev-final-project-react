import React from "react";
import {Routes, Route} from "react-router";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
// import NavigationSidebar from "../navigation-sidebar";
// import NewNavigationSidebar from "../navigation-sidebar/newNav";
import NewNavigationSidebar2 from "../navigation-sidebar/newNav2";
import HomeComponent from "../home-component";
import RecipeSidebar from "../recipe-sidebar";
import Profile from "../profile/index";
import EditProfile from "../profile/edit-profile";
import {BrowserRouter} from "react-router-dom";
import ingredients from "../../reducers/ingredients-reducer";
import recipes from "../../reducers/recipes-reducer";
// import recipesReducer from "../../reducers/recipes-reducer"
// import profileReducer from "../../reducers/profile-reducer";
import friendProfileReducer from "../../reducers/friend-profile-reducer";
import FriendsComponent from "../friends-component";
import myRecipesReducer from "../../reducers/my-recipes-reducer";
import friendRecipesReducer from "../../reducers/friend-recipes-reducer";
import SavedRecipes from "../saved-recipes/saved-recipes";
import RecipeDetailsComponent from "../recipe-details";
import CreateRecipeComponent from "../create-recipe";
import recipeIngredientsReducer from "../../reducers/recipe-ingredients-reducer";
import recipeDirectionsReducer from "../../reducers/recipe-directions-reducer";
// import recipeDirections from "../../reducers/recipe-directions-reducer";
import Login from "../profile/login";
import usersReducer from "../../reducers/users-reducer";
// import CurrentUser from "../profile/current-user";
import PublicProfile from "../profile/public-profile";
// import ProtectedRoute from "../profile/protected-route";
import MyRecipes from "../profile/my-recipes";
import PublicMyRecipes from "../profile/public-my-recipes";
import MyRecipeDetails from "../recipe-details/my-recipe-details";
import friendsReducer from "../../reducers/friends-reducer";
import savedRecipesReducer from "../../reducers/saved-recipes-reducer";
import spoonacularReducer from "../../reducers/spoonacular-reducer";
import SearchByIngredientsResults from "../spoonacular";
import RecipeResultDetails from "../spoonacular/recipe-details";
import SpoonacularRecipeDetail from "../recipe-details/spoonacular-recipe-detail";

const store = configureStore({reducer: {
            ingredients, 
            recipes,
            // profile: profileReducer,
            friendProfile: friendProfileReducer,
            myRecipes: myRecipesReducer,
            friendReipes: friendRecipesReducer,
            recipeIngredients: recipeIngredientsReducer,
            recipeDirections: recipeDirectionsReducer,
            usersData: usersReducer,
            followsData: friendsReducer,
            savedRecipes: savedRecipesReducer,
            spoonacular: spoonacularReducer
    }
});

function Fridge() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                {/*<CurrentUser>*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 mt-2">
                                {/* <NavigationSidebar/> */}
                                {/*  <NewNavigationSidebar/> */}
                                <NewNavigationSidebar2/>
                            </div>
                            <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-7"
                                 style={{"position": "relative"}}>
                                <Routes>
                                    <Route path="/" element={<HomeComponent/>}/>
                                    <Route path="/home" element={<HomeComponent/>}/>
                                    {/*differentiate logged in user's profile path from the friends' profile path*/}
                                    <Route path="/profile" element={
                                        // <ProtectedRoute>
                                            <Profile/>
                                        // </ProtectedRoute>
                                    }/>
                                    <Route path="/profile/my-recipes" element={<MyRecipes/>}/>
                                    {/*<Route path="/profile/:uid/my-recipes" element={<MyRecipes/>}/>*/}
                                    <Route path="/friends/profile/:uid/my-recipes" element={<PublicMyRecipes/>}/>
                                    <Route path="/profile/my-recipes/:rid/details" element={<MyRecipeDetails/>}/>
                                    {/*<Route path="/profile/:uid/my-recipes/:rid/details" element={<MyRecipeDetails/>}/>*/}
                                    <Route path="/friends/profile/:uid/my-recipes/:rid/details" element={<MyRecipeDetails/>}/>
                                    <Route path="/profile/edit" element={<EditProfile/>}/>
                                    {/*revised public profile path below -- yutong*/}
                                    <Route path="/friends/profile/:uid/*" element={<PublicProfile/>}/>
                                    {/*<Route path="/friends/:uid/*" element={<FriendsComponent/>}/>*/}
                                    <Route path="/friends/*" element={<FriendsComponent/>}/>
                                    <Route path="/users/:uid/saved-recipes" element={<SavedRecipes/>}/>
                                    {/* routes listed here for now - once other components done, add these routes to components */}
                                    <Route path="/profile/:uid/my-recipes/:rid/details" element={<RecipeDetailsComponent/>}/>
                                    {/*route to friends' my-recipes details*/}
                                    {/*<Route path="/friends/profile/:uid/my-recipes/:rid/details" element={<RecipeDetailsComponent/>}/>*/}
                                    <Route path="/recipes/:rid/details" element={<RecipeDetailsComponent/>}/>
                                    <Route path="/users/:uid/saved-recipes/:rid/details" element={<RecipeDetailsComponent/>}/>
                                    <Route path="/users/:uid/saved-spoonaculars/:rid/details" element={<SpoonacularRecipeDetail/>}/>
                                    <Route path="/users/:uid/create-recipes" element={<CreateRecipeComponent/>}/>
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="/search/recipesByIngredients/results" element={<SearchByIngredientsResults/>}/>
                                    <Route path="/search/recipesByIngredients/results/details/:rid" element={<RecipeResultDetails/>}/>
                                </Routes>
                            </div>
                            <div className="d-none d-lg-block col-lg-3 col-xl-3 mt-2">
                                <RecipeSidebar/>
                            </div>
                        </div>
                    </div>
                {/*</CurrentUser>*/}
            </BrowserRouter>
        </Provider>
    );
}
export default Fridge;