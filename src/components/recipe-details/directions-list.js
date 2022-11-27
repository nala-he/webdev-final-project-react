import React from "react";
import "./index.css";
import Direction from "./direction";

const DirectionsList = ({directions}) => {
    return (
        <div className="p-3">
            <div className="fw-bold fs-5 text-dark">
                Directions
            </div>
            <ol className="text-dark mt-2">
                {
                    directions.map(step => <Direction step={step}/>)
                }
            </ol>
        </div>
    );
};
export default DirectionsList;