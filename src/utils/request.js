import axios from 'axios';

const request = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api/`,
});

export const get = async (patch, options = {}) => {
    const response = await request.get(patch, options);
    return response.data;
};

export default request;
