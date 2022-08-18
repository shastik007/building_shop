import {  createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import { getAllProductsRequest,saveCategoryRequest ,deleteCategoryRequest ,editCategoryRequest,saveSubCategoryRequest,deleteSecondCategoryRequest,editSecondCategoryRequest,saveProductRequest,editProductRequest,deleteProductRequest} from '../api/productApi'


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

export const saveSubCategory = createAsyncThunk(
    'products/saveSecondCategory',
    async ({id,localData},{rejectWithValue , dispatch}) => {
        try { 
            await saveSubCategoryRequest(id,localData)

         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)

export const deleteSubCategory = createAsyncThunk(
    'products/deleteSecondCategory',
    async (id,{rejectWithValue , dispatch}) => {
        try { 
            await deleteSecondCategoryRequest(id)

         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)

export const editSubCategory = createAsyncThunk(
    'products/deleteSecondCategory',
    async ({id,localData},{rejectWithValue , dispatch}) => {
        try { 
            await editSecondCategoryRequest(id,localData)

         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)

export const saveProduct = createAsyncThunk(
    'products/saveProducts',
    async ({id,localData},{rejectWithValue , dispatch}) => {
        try { 
            await saveProductRequest(id,localData)

         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)

export const editProduct = createAsyncThunk(
    'products/editProducts',
    async ({id,localData},{rejectWithValue , dispatch}) => {
        try { 
            await editProductRequest(id,localData)

         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)

export const deleteProduct = createAsyncThunk(
    'products/deleteProducts',
    async (id,{rejectWithValue , dispatch}) => {
        try { 
            await deleteProductRequest(id)

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
    reducers:{
        increment:(state,{payload}) => {
            const {productId,isFirst} = payload
            console.log(productId,isFirst);
            const newProducts = state.products.map((category) => {
                return {
                    ...category,
                    nextCategory:category.nextCategory.map((el) =>{
                        return {
                            ...el,
                            products:el.products.map((item) => {
                                if (item.productId == productId ) {
                                    return {
                                        ...item,
                                        count:item.count + 1
                                    }
                                }
                                return item
                            })
                        }
                    })
                }
            })
           state.products = newProducts
        },
        decrement:(state,{payload}) => {
            const productId = payload
            const newProducts = state.products.map((category) => {
                return {
                    ...category,
                    nextCategory:category.nextCategory.map((el) =>{
                        return {
                            ...el,
                            products:el.products.map((item) => {
                                if (item.productId == productId && item.count > 0) {
                                    return {
                                        ...item,
                                        count:item.count - 1
                                    }
                                }
                                return item
                            })
                        }
                    })
                }
            })

            state.products = newProducts
        }
    },
    extraReducers:{
        [getAllProducts.fulfilled]:(state,{payload}) => {
            const newArray = payload.map((el) => {
                return {
                    ...el,
                    nextCategory: el.nextCategory.map((element) => {
                        return {
                            ...element,
                            products:element.products.map((el) => {
                                return {
                                    ...el,
                                    count:0,
                                }
                            })
                        }
                    })
                }
            })

            state.products = newArray
        },
    }
})

export default productSlice