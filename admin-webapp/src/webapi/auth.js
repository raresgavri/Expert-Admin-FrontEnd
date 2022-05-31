import {axios} from "../services/axios.service";

export const loginUser = async (req) => {
    return axios.post(`/login`, {...req})
        .then(res => res.data);
};

