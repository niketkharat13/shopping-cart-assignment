import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    banners:[],
    loader: false
}

const bannerReducer = createSlice({
    name: 'banner',
    initialState,
    reducers:{
        setBanners(state, action) {
            state.banners = action.payload;
            state.loader = false;

        },
        setLoader(state) {
            state.loader = !state.loader;
        }
    }
})

export const bannerAction = bannerReducer.actions;
export default bannerReducer;
