import { configureStore } from '@reduxjs/toolkit'
import orderSlice from './orderSlice'
import productSlice from './productSlice'
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        order:orderSlice.reducer,
        products:productSlice.reducer,
        auth:authSlice.reducer
    },
})

export const orderActions = orderSlice.actions
export const productActons = productSlice.actions
export const authActions = authSlice.actions

export default store

