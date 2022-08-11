import axiosInstance from "../config/axiosInstance";


export const getAllProductsRequest = () => {
    return axiosInstance.get('/client/four-category')
}