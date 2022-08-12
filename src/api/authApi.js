import axiosInstance from "../config/axiosInstance";

export const LoginRequest = (loginData) => {
    console.log(loginData,'request');
    return axiosInstance.post('/auth/sign-in',loginData)
}

export const signUpRequest = (localData) => {
    return axiosInstance.post('/auth/signup/client',localData)
}