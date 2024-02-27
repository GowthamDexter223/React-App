import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //Actions:
        initProducts: (state: any, action: any) => {
            return { ...state, product: action.payload }
        },
        addToCart: (state: any, action: any) => {
            return { ...state, cart: [...state.cart, action.payload] }
        },
        removeFromCart: (state: any, action: any) => {
            return { ...state, cart: state.cart.filter((product: any) => product.id != action.payload) }
        }
    }
})

export const { initProducts, addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer;