import React, {useState} from "react";
import { createRecipeDirection, deleteRecipeDirection } from "../../reducers/recipe-directions-reducer";
import {useDispatch, useSelector} from "react-redux";
import { createRecipeDirectionThunk, deleteRecipeDirectionThunk, findDirectionsForRecipeThunk } from "../../services/recipe-directions-thunk";

import "./index.css";

const EditDirections = ({recipe}) => {
    const directions = useSelector(state => state.recipeDirections);
    const [editDirection, setDirection] = useState('');
    const dispatch = useDispatch();

    const directionChangeHandler = (event) => {
        setDirection(event.target.value);
    }
    
    const addDirectionHandler = () => {
        const newDirection = {
            direction: editDirection,
            rid: recipe._id,
        }
        dispatch(createRecipeDirectionThunk({
            direction: editDirection,
            rid: recipe._id,
        }));
    }

    const deleteDirectionHandler = (directionId) => {
        // console.log(directionId);
        dispatch(deleteRecipeDirectionThunk(directionId));
    }

    return (
        <div className="p-3 mt-3 wd-border">
            <div className="fw-bold fs-5 text-dark">
                Directions
            </div>
            <ul className="text-dark mt-2 p-0">
                {
                    directions.recipeDirections.filter(direction => direction.rid === recipe._id)
                    .map(direction => 
                    <li key={direction._id} className="list-group-item">
                        <div className="row pt-3">
                            <div className="col-11">
                                <input className="form-control"
                                        defaultValue={direction.direction} readOnly/>
                            </div>
                            <div className="col-1 p-0 align-self-center">
                                <i className="fa-regular fa-trash-can"
                                    onClick={()=>deleteDirectionHandler(direction._id)}></i>
                            </div>
                        </div>
                    </li>
                    )
                }
            </ul>
            {/* add new direction */}
            <div>
                <div className="pb-3">
                    <input id="direction" placeholder="Enter new direction"
                            className="form-control"
                            onChange={directionChangeHandler}
                            value={editDirection}/>
                </div>
                <div className="row justify-content-center">
                    <button type="button"
                    onClick={addDirectionHandler}
                    className="col-4 btn btn-sm btn-secondary">Add Direction</button>
                </div>
            </div>

        </div>
    );
};
export default EditDirections;