import React from "react";
import {Routes, Route} from "react-router";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import NavigationSidebar from "../navigation-sidebar";
import HomeComponent from "../home-component";
import RecipeSidebar from "../recipe-sidebar";
import Profile from "../profile";
import EditProfile from "../profile/edit-profile";
import {HashRouter} from "react-router-dom";
import ingredients from "../../reducers/ingredients-reducer";
import recipesReducer from "../../reducers/recipes-reducer"
import profileReducer from "../../reducers/profile-reducer";
import friendProfileReducer from "../../reducers/friend-profile-reducer";
import FriendsComponent from "../friends-component";
import RecipeDetailsComponent from "../recipe-details";

const store = configureStore({reducer: {
            ingredients,
            recipes: recipesReducer,
            profile: profileReducer,
            friendProfile: friendProfileReducer}
});

function Fridge() {
    return(
        <Provider store={store}>
            <HashRouter>
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 mt-2">
                            <NavigationSidebar/>
                        </div>
                        <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-7"
                             style={{"position": "relative"}}>
                            <Routes>
                                <Route path="/" element={<HomeComponent/>}/>
                                <Route path="/home" element={<HomeComponent/>}/>
                                <Route path="/profile/:uid/*" element={<Profile/>}/>
                                <Route path="/profile/:uid/edit" element={<EditProfile/>}/>
                                <Route path="/friends/:uid/*" element={<FriendsComponent/>}/>
                                <Route path="/friends/*" element={<FriendsComponent/>}/>
                                <Route path="/profile/:uid/my-recipes/:rid/details" element={<RecipeDetailsComponent/>}/>
                                <Route path="/users/:uid/saved-recipes/:rid/details" element={<RecipeDetailsComponent/>}/>
                            </Routes>
                        </div>
                        <div className="d-none d-lg-block col-lg-3 col-xl-3 mt-2">
                            <RecipeSidebar/>
                        </div>
                    </div>
                </div>
            </HashRouter>
        </Provider>
    );
}
export default Fridge;