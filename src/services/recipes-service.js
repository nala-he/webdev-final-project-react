import axios from 'axios';

const FRIDGE_API_BASE = 'http://localhost:4000/fridge';
const RECIPES_API = `${FRIDGE_API_BASE}/recipes`;
const USERS_API = `${FRIDGE_API_BASE}/users`;

export const createRecipe = async (uid) => {
    const response = await axios.post(`${USERS_API}/${uid}/recipes`);
    return response.data;
}

export const deleteRecipe = async (rid) => {
    const response = await axios.delete(`${RECIPES_API}/${rid}`);
    return response.data;
}

export const updateRecipe = async (rid, recipe) => {
    const response = await axios.put(`${RECIPES_API}/${rid}`, recipe);
    return response.data;
}

export const findRecipes = async () => {
    const response = await axios.get(`${RECIPES_API}`);
    return response.data;
}

export const findRecipeById = async (rid) => {
    const response = await axios.get(`${RECIPES_API}/${rid}`);
    return response.data;
}

export const findRecipesByAuthor = async (uid) => {
    const response = await axios.get(`${USERS_API}/${uid}/recipes`);
    return response.data;
}
