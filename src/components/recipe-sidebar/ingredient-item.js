import React from "react";
import {useDispatch} from "react-redux";
import {deleteIngredient, ingredientCheckedToggle} from "../../reducers/ingredients-reducer";
import "./index.css";

const IngredientItem = (
    {
        ingredient = {
            _id: "000",
            checked: true,
            title: 'Milk'
        }
    }) => {

    const dispatch = useDispatch();

    const toggleChecked = (id) => {
        dispatch(ingredientCheckedToggle(id));
    }

    const deleteIngredientClickHandler = (id) => {
        dispatch(deleteIngredient(id));
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