import { configureStore } from '@reduxjs/toolkit'
import orderSlice from './orderSlice'
import productSlice from './productSlice'


const store = configureStore({
    reducer: {
        order:orderSlice.reducer,
        products:productSlice.reducer
    },
})

export const orderActions = orderSlice.actions
export const productActons = productSlice.actions

export default store

