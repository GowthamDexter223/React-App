import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    cart: []
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        //Actions:
        initProducts: (state, action) => {
            return {...state, products: action.payload }
        },
        addToCart: (state, action) => {
            
        },
        removeFromCart: (state, action) => {

        }
    }
})

export const { initProducts, addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer;