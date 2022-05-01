import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader: false,
    cart: [],
    error: null,
    totalPrice: 0
}

const calculateTotalAmt = (cartItems) => {
    let total = 0;
    for (const item of cartItems) {
        total += item.price * item.quantity;
    }
    console.log(total);
    return total;
}

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setLoader(state) {
            state.loader = !state.loader;
        },
        addToCart(state, action) {
            let cartItem = {...action.payload};
            cartItem.quantity = 1;
            cartItem.totalPrice = cartItem.quantity * cartItem.price
            state.cart = [...state.cart, cartItem];
            console.log(state.cart);
            state.loader = false;
            state.totalPrice = calculateTotalAmt(state.cart)
        },
        setError(state, action) {
            state.loader = false;
            state.error = action.payload;
        },
        updateCart(state, action) {
            state.loader = false;
            let cart = [...state.cart.slice()];
            let productIndex = cart.findIndex(p => p.id === action.payload.id);
            let updatedQuantity = cart[productIndex].quantity;
            if (action.payload.type === "INCREMENT") {
                updatedQuantity += 1;
            } else {
                updatedQuantity -= 1;
            }
            if (updatedQuantity === 0) {
                cart = cart.filter(cartItem => cartItem.id !== action.payload.id);
            } else {
                cart[productIndex] = {
                    ...cart[productIndex],
                    quantity:  updatedQuantity,
                    totalPrice: updatedQuantity * cart[productIndex].price
                }
                
            }
            state.cart = cart;
            state.totalPrice = calculateTotalAmt(state.cart);
        }
    }
})

export const cartAction = cartReducer.actions;
export default cartReducer;