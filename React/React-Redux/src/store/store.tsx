import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productsSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice
    }
})

export default store;