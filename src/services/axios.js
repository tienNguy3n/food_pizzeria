import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://food-pizzeria-default-rtdb.firebaseio.com/',
});

instance.interceptors.response.use(res => {
    return res.data
}, err => {
    return Promise.reject(err);
})