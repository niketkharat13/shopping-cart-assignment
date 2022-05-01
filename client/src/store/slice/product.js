import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader: false,
    product: [],
    error: null
}

const productReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setLoader(state) {
            state.loader = !state.loader;
        },
        setProduct(state, action) {
            state.product = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loader = false;
        }
    }
})

export const productAction = productReducer.actions;
export default productReducer;