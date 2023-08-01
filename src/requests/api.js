import axios from 'axios';
import Cookies from 'js-cookie';
import {SERVER_URL} from "../constants/constants"

const api = axios.create({
    baseURL: SERVER_URL + "/api",
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(config => {
    const token = Cookies.get("authToken")
    if (token) {
        config.headers.Authorization = token
    } else {
        window.location.href = "/"
    }
    return config;
})

api.interceptors.response.use(
    response => response,
    error => {
        // If the API returns a 401 response, handle the unauthorized access
        if (error.response && error.response.status === 401) {
            // Delete the authToken from the cookies
            Cookies.remove("authToken");
            // Redirect to the login page or any other appropriate action
            window.location.href = "/";
        }
        return Promise.reject(error);
    })

export default api;