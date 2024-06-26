import axios from 'axios';

const API_URL = 'https://localhost:3000/auth/';

const register = (username, password) => {
    return axios.post(API_URL + 'register', { username, password });
};

const login = (username, password) => {
    return axios.post(API_URL + 'login', { username, password })
        .then(response => {
            if (response.data.access_token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('user');
};

export default {
    register,
    login,
    logout,
};
