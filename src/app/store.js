import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/ShopCart/ProductSlice'

export const store = configureStore({
    reducer:{
        products:productReducer
}
})