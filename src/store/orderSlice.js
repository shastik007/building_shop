import {  createSlice } from '@reduxjs/toolkit'

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
        }
    },
 })
 
 export default orderSlice
 