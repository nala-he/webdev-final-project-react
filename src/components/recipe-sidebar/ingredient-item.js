import React from "react";
import {useDispatch} from "react-redux";
import {ingredientCheckedToggle} from "../../reducers/ingredients-reducer";
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

    return (
        <li className="list-group-item border border-0 bg-transparent">
            <input type="checkbox"
                   defaultChecked={ingredient.checked}
                   onChange={() => toggleChecked(ingredient._id)}/>
            <span className="ps-2 text-decoration-underline wd-font-18">
                {ingredient.title}
            </span>
        </li>
    );
};
export default IngredientItem;