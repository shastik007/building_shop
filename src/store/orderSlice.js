import {  createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { sendUserOrder } from '../api/productApi'




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
    order:[]
}

const orderSlice = createSlice({
    name: 'auth',
    initialState:initState,
    reducers:{
        addItem:(state,actions) => {
            const newMaterial = actions.payload
            const currentMaterialIndex = state.order.findIndex(material => material.id === newMaterial.id )
            console.log();
            if(currentMaterialIndex !== -1){
             state.order[currentMaterialIndex].count = state.order[currentMaterialIndex].count + 1
            }
            if (currentMaterialIndex === -1) {
                state.order.push(newMaterial)
            }
        },
        removeItem:(state,actions) =>{
            const material = actions.payload
            const currentMaterialIndex = state.order.findIndex(el => el.id === material.id )

            if (currentMaterialIndex !== -1) {
                console.log(state.order[currentMaterialIndex].count);
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
 })
 
 export default orderSlice
 