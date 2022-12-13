import React from "react";
import {useDispatch} from "react-redux";
import "./index.css";
import * as service from "../../services/fridge-ingredients-service";
import {
    deleteFridgeIngredientThunk,
    updateFridgeIngredientThunk
} from "../../services/fridge-ingredients-thunk";

const IngredientItem = (
    {
        ingredient = {
            _id: "000",
            checked: true,
            title: 'Milk'
        }
    }) => {

    const dispatch = useDispatch();

    const toggleChecked = async (id) => {
        const targetIngredient = await service.findFridgeIngredientById(id);
        targetIngredient.checked = !targetIngredient.checked;
        dispatch(updateFridgeIngredientThunk({ingredientId: id, updates: targetIngredient}));
    }

    const deleteIngredientClickHandler = (id) => {
        dispatch(deleteFridgeIngredientThunk(id));
    }

    return (
        <li className="list-group-item border border-0 bg-transparent d-flex
                        justify-content-between align-items-center">
            <div>
                <input type="checkbox"
                       defaultChecked={ingredient.checked}
                       onChange={() => toggleChecked(ingredient._id)}/>
                <span className="ps-2 text-decoration-underline wd-font-18">
                    {ingredient.title}
                </span>
            </div>
            <button onClick={() => deleteIngredientClickHandler(ingredient._id)}
                    className="btn float-end fs-5 text-dark p-0">
                <i className="bi bi-x p-0"></i>
            </button>
        </li>
    );
};
export default IngredientItem;