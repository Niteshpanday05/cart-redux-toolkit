import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[], //final cart items
    tempItems: [], //temporary items for updates
    totalPrice: 0
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
                alert('hello')
        }

    }

})
export const{addToCart}=cartSlice.actions;

export default cartSlice.reducer;