import axios from "axios";

// REACT_APP_BASE_URL=http://localhost:4000
const API_BASE = process.env.REACT_APP_BASE_URL;
const USERS_API = `${API_BASE}/fridge/users`;
// axios.defaults.adapter = require('axios/lib/adapters/http')

const api = axios.create({
                             withCredentials: true
                         });

export const followUser = async (follow) => {
    const response = await api.post(`${USERS_API}/${follow}/friends`)
    return response.data
}

export const findUsersIamFollowing = async (me) => {
    const response = await api.get(`${USERS_API}/${me}/following`)
    return response.data
}

export const findUsersIamFollowedBy = async (me) => {
    const response = await api.get(`${USERS_API}/${me}/followedBy`)
    return response.data
}