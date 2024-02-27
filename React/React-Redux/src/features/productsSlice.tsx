import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    product: [],
    status: "idle"
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        //Actions:
        // initProducts: (state: any, action: any) => {
        //     return { ...state, product: action.payload }
        // }
    },
    extraReducers: (builder: any) => {
        builder.addCase(getProducts.fulfilled, (state: any, action: any) => {
            state.product = action.payload;
            state.status = "idle";
        }).addCase(getProducts.rejected, (state: any) => {
            state.status = "error"
        }).addCase(getProducts.pending, (state: any) => {
            state.status = "loading";
        });
    }
});

//export const { initProducts } = productSlice.actions

export const getProducts = createAsyncThunk("products/get", async (state: any, action: any) => {

    try {
        const result = await axios.get("https://fakestoreapi.com/products");
        const product = result.data
        console.log(product)
        return product;
    }
    catch (error) {
        console.log(error)
    }
});

export default productSlice.reducer;
