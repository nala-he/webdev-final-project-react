import React, {useState} from "react";
import { createRecipeIngredient, deleteRecipeIngredient } from "../../reducers/recipe-ingredients-reducer";
import {useDispatch, useSelector} from "react-redux";
import { createRecipeIngredientThunk, deleteRecipeIngredientThunk, findIngredientsForRecipeThunk } from "../../services/recipe-ingredients-thunk";
import "./index.css";

const EditIngredients = ({recipe}) => {
    const ingredients = useSelector(state => state.recipeIngredients);
    console.log(recipe);
    console.log(ingredients);
    const [editIngredient, setIngredient] = useState('');
    const dispatch = useDispatch();

    const ingredientChangeHandler = (event) => {
        setIngredient(event.target.value);
    }
    
    const addIngredientHandler = () => {
        const newIngredient = {
            ingredient: editIngredient,
            rid: recipe._id,
        }
        dispatch(createRecipeIngredientThunk({
            ingredient: editIngredient,
            rid: recipe._id,
        }));
    }

    const deleteIngredientHandler = (ingredientId) => {
        dispatch(deleteRecipeIngredientThunk(ingredientId));
    }

    return (
        <div className="p-3 mt-3 wd-border">
            <div className="fw-bold fs-5 text-dark">
                Ingredients
            </div>
            <ul className="text-dark mt-2 p-0">
                {
                    ingredients.recipeIngredients.filter(ingredient => ingredient.rid === recipe._id)
                    .map(ingredient => 
                    <li key={ingredient._id} className="list-group-item">
                        <div className="row pt-3">
                            <div className="col-11">
                                <input className="form-control"
                                        defaultValue={ingredient.ingredient} readOnly/>
                            </div>
                            <div className="col-1 p-0 align-self-center">
                                <i className="fa-regular fa-trash-can"
                                    onClick={()=>deleteIngredientHandler(ingredient._id)}></i>
                            </div>
                        </div>
                    </li>
                    )
                }
            </ul>
            {/* add new ingredient */}
            <div>
                <div className="pb-3">
                    <input id="ingredient" placeholder="Enter new ingredient"
                            className="form-control"
                            onChange={ingredientChangeHandler}
                            value={editIngredient}/>
                </div>
                <div className="row justify-content-center">
                    <button type="button"
                    onClick={addIngredientHandler}
                    className="col-4 btn btn-sm btn-secondary">Add Ingredient</button>
                </div>
            </div>

        </div>
    );
};
export default EditIngredients;