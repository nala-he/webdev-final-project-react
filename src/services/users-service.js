import axios from 'axios';
// REACT_APP_BASE_URL=http://localhost:4000
const API_BASE = process.env.REACT_APP_BASE_URL;
const USERS_API = `${API_BASE}/fridge/users`;
axios.defaults.adapter = require('axios/lib/adapters/http')

export const findUsers = async () => {
    const response = await axios.get(USERS_API);
    return response.data;
}

export const findUsersById = async (uid) => {
    const response = await axios.get(`${USERS_API}/${uid}`);
    return response.data;
}

export const createUser = async (user) => {
    const response = await axios.post(USERS_API, user);
    return response.data;
}

export const updateUser = async (user) => {
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
}

export const deleteUser = async (uid) => {
    const response = await axios.delete(`${USERS_API}/${uid}`);
    return response.data;
}