import React, {useEffect,useState} from "react";
import {findIngredientsForRecipe} from "../../services/recipe-ingredients-service"
import "./index.css";
import {useLocation} from "react-router-dom";


const IngredientsList = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let rid = paths[2];

    if (paths.includes("my-recipes")) {
        rid = paths[3];
        if (paths.length === 7) {
            rid = paths[5];
        }
    }

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
                    <li key={ingredient._id}>
                        <span>{ingredient.ingredient}</span>
                    </li>
                        )
                }
            </ul>
        </div>
    );
};
export default IngredientsList;