import axios from "axios";

const API_KEY = 'apiKey=540427b73f384d5b9d8afab31bf7e8ba';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const findRecipesByIngredients = async (ingredients) => {
    const response = await axios.get(`${BASE_URL}/findByIngredients?${API_KEY}&ingredients=${ingredients}`);
    return response.data;
}
