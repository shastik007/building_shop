import axiosInstance from "../config/axiosInstance";


export const getAllProductsRequest = () => {
    return axiosInstance.get('/client/four-category')
}

export const saveCategoryRequest = (data) => {
    return axiosInstance.post('/admin/first-category',data)
}

export const deleteCategoryRequest = (id) => {
    return axiosInstance.delete(`/admin/first-category/${id}`)
}

export const editCategoryRequest = (id,data) => {
    return axiosInstance.patch(`/admin/first-category/${id}`,data)
}