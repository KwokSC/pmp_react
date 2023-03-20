import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers:{
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(config => {
    const token = Cookies.get("authToken")
    if(token){
        config.headers.Authorization = token
    }
    return config;
})

export default api;