import axios from 'axios';

const FRIDGE_API_BASE = 'http://localhost:4000/fridge';
const RECIPE_DIRECTIONS_API = `${FRIDGE_API_BASE}/recipe-directions`;
const RECIPE_API = `${FRIDGE_API_BASE}/recipes`;

export const createRecipeDirection = async (direction) => {
    const response = await axios.post(`${RECIPE_DIRECTIONS_API}`, direction);
    return response.data;
}

export const deleteRecipeDirection = async (directionId) => {
    const response = await axios.delete(`${RECIPE_DIRECTIONS_API}/${directionId}`);
    return response.data;
}

export const findRecipeDirections = async () => {
    const response = await axios.get(`${RECIPE_DIRECTIONS_API}`);
    return response.data;
}

export const findRecipeDirectionsById = async (directionId) => {
    const response = await axios.get(`${RECIPE_DIRECTIONS_API}/${directionId}`);
    return response.data;
}

export const findDirectionsForRecipe = async (recipeId) => {
    const response = await axios.get(`${RECIPE_API}/${recipeId}/directions`);
    return response.data;
}