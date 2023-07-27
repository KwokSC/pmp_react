import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
    baseURL: "http://localhost:8080/api",
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