import {  createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import { getAllProductsRequest } from '../api/productApi'


export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_,{rejectWithValue}) => {
        try {
            const response = await getAllProductsRequest()
            console.log(response);
            return ''
         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)


export const productSlice = createSlice({
    name:'products',
    reducers:{},
    extraReducers:{}
})