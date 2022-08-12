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

export const saveSubCategoryRequest = (id,data) => {
    return axiosInstance.post(`/admin/second-category/${id}`,data)
}

export const deleteSecondCategoryRequest = (id) => {
    return axiosInstance.delete(`/admin/second-category/${id}`)
}

export const editSecondCategoryRequest = (id,data) => {
    return axiosInstance.patch(`/admin/second-category/${id}`,data)
}

export const saveProductRequest = (id,data) => {
    return axiosInstance.post(`/admin/product/${id}`,data)
}

export const editProductRequest = (id,data) => {
    return axiosInstance.patch(`/admin/product/${id}`,data)
}

export const deleteProductRequest = (id) => {
    return axiosInstance.delete(`/admin/product/${id}`)
}

export const sendUserOrder = (data) => {
    return axiosInstance.post(`/client/order/basket/{orderId}`,data)
}