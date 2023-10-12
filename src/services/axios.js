import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://65266232917d673fd76c206a.mockapi.io/api/',
});

instance.interceptors.response.use(res => {
    return res.data
}, err => {
    return Promise.reject(err);
})