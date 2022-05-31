import {axios} from "../services/axios.service";

export const getRecordings = async () => {
    return axios.get(`/recordings`)
        .then(res => res.data);
};

export const getUsers = async () => {
    return axios.get(`/users`)
        .then(res => res.data);
};

export const changeUsersPermission = async (req) => {
    return axios.patch(`/users/${req.userId}`, {...req.body})
        .then(res => res.data);
};
