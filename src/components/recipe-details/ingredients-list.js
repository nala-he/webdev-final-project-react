import React, {useEffect,useState} from "react";
import {findIngredientsForRecipe} from "../../services/recipe-ingredients-service"
import "./index.css";
import {useLocation} from "react-router-dom";


const IngredientsList = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const rid = paths[2];

    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        async function fetchData() {
            const target = await findIngredientsForRecipe(rid)
            setIngredients(target)
        }
        fetchData();
    },[rid]);

    return(
        <div className="p-3">
            <div className="fw-bold fs-5 text-dark">
                Ingredients
            </div>
            <ul className="text-dark mt-2">
                {
                    ingredients.map(ingredient => 
                    <li>
                        <span>{ingredient.ingredient}</span>
                    </li>
                        )
                }
            </ul>
        </div>
    );
};
export default IngredientsList;