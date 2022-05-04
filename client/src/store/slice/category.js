import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader: false,
    category: [],
    selectedCategory: null,
    error: null
}

const categoryReducer = createSlice({
    name: 'category',
    initialState,
    reducers:{
        setLoader(state) {
            state.loader = !state.loader;
        },
        setCategories(state, action) {
            state.category = action.payload;
        },
        setCategory(state, action) {
            state.selectedCategory = action.payload;
            state.loader = !state.loader;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loader = false;
        }
    }
})

export const categoryAction = categoryReducer.actions;
export default categoryReducer;