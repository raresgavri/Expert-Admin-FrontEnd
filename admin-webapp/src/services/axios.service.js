import axiosLibrary from 'axios';
import {Cookies} from "react-cookie";

const http = axiosLibrary.create({
    baseURL: `https://api.fiihealth.ro/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

http.interceptors.request.use(
    async (config) => {
        // add token here to each request if token available
        const token = new Cookies().get('fiiHealthyToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (err) => {
        Promise.reject(err);
    },
);

export const axios = http;
