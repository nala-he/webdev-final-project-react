import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import { findAllRecipesThunk } from "../../services/recipes-thunk";
import CreateRecipeDetails from "./create-recipe-details";

const CreateRecipe = ({currentUser}) => {
    const dispatch = useDispatch();
    // hard coded recipe for now- need to change
    // const recipe = useSelector(state => state.recipes[0]);
    const recipes = useSelector(state => state.recipes);

    // get recipe id of the empty recipe that was just created
    useEffect(() => {
        dispatch(findAllRecipesThunk());
    }, [recipes]);

    const len = recipes.recipes.length;
    const recipe = recipes.recipes[len-1];

    return (
        <>
            {
                recipe && <CreateRecipeDetails recipe={recipe}/>
            }
        </>
    );
};
export default CreateRecipe;