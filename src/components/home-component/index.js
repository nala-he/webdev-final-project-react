import React from "react";
import RecipeSummaryList from "../recipe-summary-list";
import "./index.css"

const HomeComponent = () => {
    return (
        <div className="m-3 wd-border">
            <RecipeSummaryList/>
        </div>
    );
};
export default HomeComponent;