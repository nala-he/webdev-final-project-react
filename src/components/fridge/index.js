import React from "react";
import {Routes, Route} from "react-router";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import NavigationSidebar from "../navigation-sidebar";
import HomeComponent from "../home-component";
import RecipeSidebar from "../recipe-sidebar";
import {HashRouter} from "react-router-dom";
import ingredients from "../../reducers/ingredients-reducer";

const store = configureStore({reducer: {ingredients}});

function Fridge() {
    return(
        <Provider store={store}>
            <HashRouter>
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 mt-2">
                            <NavigationSidebar/>
                        </div>
                        <div className="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-7"
                             style={{"position": "relative"}}>
                            <Routes>
                                <Route path="/" element={<HomeComponent/>}/>
                                <Route path="/home" element={<HomeComponent/>}/>
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