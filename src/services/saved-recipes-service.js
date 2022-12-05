import axios from 'axios';

const FRIDGE_API_BASE = 'http://localhost:4000/fridge';
const SAVED_RECIPES_API = `${FRIDGE_API_BASE}/saved-recipes`;
const USERS_API = `${FRIDGE_API_BASE}/users`;

export const createSavedRecipe = async (uid, rid) => {
    const response = await axios.post(`${USERS_API}/${uid}/saved-recipes/${rid}`);
    return response.data;
}

export const findSavedRecipesByUser = async (uid) => {
    const response = await axios.get(`${USERS_API}/${uid}/saved-recipes`);
    return response.data;
}

export const deleteSavedRecipe = async (savedRecipeId) => {
    const response = await axios.delete(`${SAVED_RECIPES_API}/${savedRecipeId}`);
    return response.data;
}

export const deleteSavedRecipeByUserAndRecipeId = async (uid, rid) => {
    const response = await axios.delete(`${USERS_API}/${uid}/recipes/${rid}/saved-recipes`);
    return response.data;
}