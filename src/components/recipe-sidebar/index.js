import React, {useEffect, useState} from "react";
import IngredientItem from "./ingredient-item";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import * as service from "../../services/fridge-ingredients-service";
import {
    createFridgeIngredientThunk, findCheckedFridgeIngredientsByUserThunk,
    findFridgeIngredientsByUserThunk
} from "../../services/fridge-ingredients-thunk";
import {Navigate, useNavigate} from "react-router-dom";
import {findRecipesByIngredientsThunk} from "../../services/spoonacular-thunks";

const RecipeSidebar = () => {
    const {ingredients, checkedIngredients} = useSelector(state => state.ingredients);
    const [ingredient, setIngredient] = useState({title: '', checked: false});
    const dispatch = useDispatch();
    // HARDCODED CURRENTLY LOGGED IN USER FOR TESTING ------- UPDATE ONCE PROFILE IMPLEMENTED ----------------------------------------------
    const uid = "638624632cf03e49f0977571";
    // added the usersData reducer to check the currentUser status (logged in or not)-yutong
    const {currentUser} = useSelector(state => state.usersData);

    const checkClickHandler = (event) => {
        const newIngredient = {
            ...ingredient,
            checked: !ingredient.checked
        };
        setIngredient(newIngredient);
    }

    const ingredientChangeHandler = (event) => {
        const titleValue = event.target.value;
        const newIngredient = {
            ...ingredient,
            title: titleValue
        };
        setIngredient(newIngredient);
    };

    const navigate = useNavigate();
    const addIngredientClickHandler = () => {
        // added the if statement to prevent non-logged-in user clicking the button-yutong
        if (!currentUser) {
            // console.log("click")
            navigate('/login');
            return;
        }
        dispatch(createFridgeIngredientThunk({uid, ingredient}));
    };

    const searchByIngredientsClickHandler = async () => {
        // added the if statement to prevent non-logged-in user clicking the button-yutong
        if (!currentUser) {
            // console.log("click")
            navigate('/login');
            return;
        }
        let checkedIngredients = await service.findCheckedFridgeIngredientsByUser(uid);
        checkedIngredients = checkedIngredients.map(ingredient => ingredient.title.toLowerCase());
        const spoonacularIngredientsFormat = checkedIngredients.join(',+');
        dispatch(findRecipesByIngredientsThunk(spoonacularIngredientsFormat))
            .then(navigate('/searchByIngredients/results'));
    }

    useEffect(() => {
        dispatch(findFridgeIngredientsByUserThunk(uid));
    }, []);

    return(
        <div className="m-2 wd-component-outline wd-bg-light-blue h-100 sticky-top">
            {/* Ingredients Header */}
            <h4 className="p-3 fw-bold text-black">Ingredients</h4>
            <div>
                <ul className="list-group">
                    {/* Current ingredients */}
                    {
                        ingredients.map((ingredient) => {
                            return <IngredientItem key={ingredient._id}
                                                   ingredient={ingredient}/>
                        })
                    }

                    {/* Add new ingredient */}
                    <li className="list-group-item border border-0 bg-transparent d-flex">
                        <input className="me-2"
                               type="checkbox"
                               defaultChecked={ingredient.checked}
                               onClick={checkClickHandler}/>
                        <input className="form-control w-100 wd-font-18 text-dark"
                               type="text"
                               onChange={ingredientChangeHandler}
                               placeholder="New Ingredient"
                               value={ingredient.title}/>
                    </li>

                    {/* Add ingredient button */}
                    <div className="d-flex justify-content-center mt-5">
                        <button onClick={addIngredientClickHandler}
                                type="button"
                                className="wd-button-blue wd-width-80 wd-font-18">
                            Add Ingredient
                        </button>
                    </div>

                    {/* Search by ingredients button */}
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <button onClick={searchByIngredientsClickHandler}
                                type="button"
                                className="wd-button-blue wd-width-80 wd-font-18">
                            Search for Recipes by Ingredients
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default RecipeSidebar;