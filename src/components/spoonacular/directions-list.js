import React from "react";
import Direction from "./direction-item";

const DirectionsList = ({directions}) => {
    return (
        <div className="p-3">
            <div className="fw-bold fs-5 text-dark">
                Directions
            </div>
            <ol className="text-dark mt-2">
                {
                    directions.name.length !== 0 &&
                    <li>
                        {directions.name}
                    </li>
                }
                {
                    directions.steps.map(steps => <Direction step={steps.step}/>)
                }
            </ol>
        </div>
    );
};
export default DirectionsList;