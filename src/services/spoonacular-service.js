import axios from "axios";

// const API_KEY = 'apiKey=540427b73f384d5b9d8afab31bf7e8ba';
const API_KEY = 'apiKey=dc9b8ede1b034e4f8b6ef4a0402d4bce';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const findRecipesByIngredients = async (ingredients) => {
    const response = await axios.get(`${BASE_URL}/findByIngredients?${API_KEY}&ingredients=${ingredients}`);
    return response.data;
}

export const findRecipeInfoById = async (rid) => {
    const response = await axios.get(`${BASE_URL}/${rid}/information?${API_KEY}&includeNutrition=false`);
    return response.data;
}
