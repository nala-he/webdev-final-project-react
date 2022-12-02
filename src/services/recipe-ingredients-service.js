import axios from 'axios';

const FRIDGE_API_BASE = 'http://localhost:4000/fridge';
const RECIPE_INGREDIENTS_API = `${FRIDGE_API_BASE}/recipe-ingredients`;
const RECIPE_API = `${FRIDGE_API_BASE}/recipes`;

export const createRecipeIngredient = async (ingredient) => {
    const response = await axios.post(`${RECIPE_INGREDIENTS_API}`, ingredient);
    return response.data;
}

export const deleteRecipeIngredient = async (ingredientId) => {
    const response = await axios.delete(`${RECIPE_INGREDIENTS_API}/${ingredientId}`);
    return response.data;
}

export const findRecipeIngredients = async () => {
    const response = await axios.get(`${RECIPE_INGREDIENTS_API}`);
    return response.data;
}

export const findRecipeIngredientsById = async (ingredientId) => {
    const response = await axios.get(`${RECIPE_INGREDIENTS_API}/${ingredientId}`);
    return response.data;
}

export const findIngredientsForRecipe = async (recipeId) => {
    const response = await axios.get(`${RECIPE_API}/${recipeId}/ingredients`);
    return response.data;
}