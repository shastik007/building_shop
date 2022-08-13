import {  createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { sendUserOrder , getAllOrderRequest } from '../api/productApi'




export const getAllOrder = createAsyncThunk(
    'order/getAllOrder',
    async(_,{rejectWithValue}) => {
        try {
            const {data} = await getAllOrderRequest()

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)




export const sendOrder = createAsyncThunk(
    'order/sendOrder',
    async(order,{rejectWithValue}) =>{
        try { 
            await sendUserOrder(order)
            alert('Заказ принят')
         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)

const initState = {
    order:[],
    adminOrder:[]
}

const orderSlice = createSlice({
    name: 'auth',
    initialState:initState,
    reducers:{
        addItem:(state,actions) => {
            const newMaterial = actions.payload
            const currentMaterialIndex = state.order.findIndex(material => material.productId === newMaterial.productId )
            if(currentMaterialIndex !== -1){
             state.order[currentMaterialIndex].count = state.order[currentMaterialIndex].count + 1
            }
            if (currentMaterialIndex === -1) {
                state.order.push(newMaterial)
            }
        },
        removeItem:(state,actions) =>{
            const material = actions.payload
            const currentMaterialIndex = state.order.findIndex(el => el.productId === material.productId )

            if (currentMaterialIndex !== -1) {
                if(state.order[currentMaterialIndex].count >= 1){
                    state.order[currentMaterialIndex].count = state.order[currentMaterialIndex].count -1
                }
               
            }

            if (state.order[currentMaterialIndex].count === 0) {
                    state.order.splice(currentMaterialIndex,1)
                    console.log('second');
                }
            
        }
    },
    extraReducers:{
        [getAllOrder.fulfilled]:(state,{payload}) => {
            state.adminOrder = payload
        }
    }
 })
 
 export default orderSlice
 