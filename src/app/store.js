import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/ShopCart'

export const store = configureStore({
    reducer:{
        products:productReducer
}
})