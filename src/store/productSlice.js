import {  createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import { getAllProductsRequest,saveCategoryRequest ,deleteCategoryRequest ,editCategoryRequest} from '../api/productApi'


export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await getAllProductsRequest()
            return data
         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)

export const saveCategory = createAsyncThunk(
    'products/saveCategory',
    async (localData,{rejectWithValue , dispatch}) => {
        try {
            await saveCategoryRequest(localData)
         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)


export const editCategory = createAsyncThunk(
    'products/editCategory',
    async ({id,localData},{rejectWithValue , dispatch}) => {
        try {  
            await editCategoryRequest(id,localData)
         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)

export const deleteCategoryWithId = createAsyncThunk(
    'products/deleteCategory',
    async (id,{rejectWithValue , dispatch}) => {
        try {
           
            await deleteCategoryRequest(id)
            

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
            console.log(payload);
            state.products = payload
        },
    }
})

export default productSlice