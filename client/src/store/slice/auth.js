import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: [],
    loggedInUser: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp(state, action) {
            state.user.push(action.payload);
        },
        login(state, action) {
            let isUserExisted = [...state.user].filter((user) => user.email === action.payload.email && user.password === action.payload.password);
            if (isUserExisted.length > 0) {
                state.isLoggedIn = true;
                state.loggedInUser = isUserExisted[0]
            }
        }
    }
})
export const authAction = authReducer.actions;
export default authReducer;

