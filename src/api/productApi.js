import axiosInstance from "../config/axiosInstance";


export const getAllProductsRequest = () => {
    console.log('wrok2');
    return axiosInstance.get('/client/four-category')
}