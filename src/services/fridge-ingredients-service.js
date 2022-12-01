import axios from 'axios';

const FRIDGE_API_BASE = 'http://localhost:4000/fridge';
const FRIDGE_INGREDIENTS_API = `${FRIDGE_API_BASE}/fridge-ingredients`;
const USERS_API = `${FRIDGE_API_BASE}/users`;

export const createFridgeIngredient = async (uid, ingredient) => {
    const response = await axios.post(`${USERS_API}/${uid}/fridge-ingredients`, ingredient);
    return response.data;
}

export const deleteFridgeIngredient = async (ingredientId) => {
    const response = await axios.delete(`${FRIDGE_INGREDIENTS_API}/${ingredientId}`);
    return response.data;
}

export const updateFridgeIngredient = async (ingredientId, updates) => {
    const response = await axios.put(`${FRIDGE_INGREDIENTS_API}/${ingredientId}`, updates);
    return response.data;
}

export const findFridgeIngredientsByUser = async (uid) => {
    const response = await axios.get(`${USERS_API}/${uid}/fridge-ingredients`);
    return response.data;
}

export const findCheckedFridgeIngredientsByUser = async (uid) => {
    const response = await axios.get(`${USERS_API}/${uid}/fridge-ingredients/checked`);
    return response.data;
}

export const findFridgeIngredientById = async (ingredientId) => {
    const response = await axios.get(`${FRIDGE_INGREDIENTS_API}/${ingredientId}`);
    return response.data;
}