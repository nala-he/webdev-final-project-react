import React from "react";
import "./index.css";

const NutritionalFacts = ({nutritionalFact}) => {
    return (
        <div className="p-3">
            <div className="fs-5 text-dark">
                <span className="fw-bold">Nutritional Facts </span>(per serving)
            </div>
            <div className="mt-3 fs-6 text-dark">
                <span className="fw-bold">Calories: </span>{nutritionalFact.calories}<br/>
                <span className="fw-bold">Fat: </span>{nutritionalFact.fat}<br/>
                <span className="fw-bold">Carbs: </span>{nutritionalFact.carbs}<br/>
                <span className="fw-bold">Protein: </span>{nutritionalFact.protein}
            </div>
        </div>
    );
};
export default NutritionalFacts;