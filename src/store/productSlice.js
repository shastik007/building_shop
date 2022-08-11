import {  createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import { getAllProductsRequest } from '../api/productApi'


export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_,{rejectWithValue}) => {
        try {
            console.log('wrok');
            const {data} = await getAllProductsRequest()
            return data
         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)


const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[]
    },
    reducers:{},
    extraReducers:{
        [getAllProducts.fulfilled]:(state,{payload}) => {
            state.products = payload
        }
    }
})

export default productSlice