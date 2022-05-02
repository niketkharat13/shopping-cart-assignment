// import ApiService from '../../serices/api';
import { cartAction } from '../slice/cart';
import { toast } from 'react-toastify';
export const addToCart = (product) => {
    return dispatch => {
        try {
            dispatch(cartAction.setLoader());
            dispatch(cartAction.addToCart(product));
            showtoaster("Item has been added to cart successfully");
        } catch (error) {
            dispatch(cartAction.setError(error));
            showtoaster("Internal Server Error", "error");
        }
    }
}


export const updateCartProductQnt = (parmas) => {
    return dispatch => {
        try {
            dispatch(cartAction.setLoader())
            dispatch(cartAction.updateCart(parmas));
            showtoaster("Item has been updated successfully");
        } catch (error) {
            dispatch(cartAction.setError(error));
            showtoaster("Internal Server Error", "error");
        }
    }
}

const showtoaster = (msg, type = "success") => {
    toast(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type
    })
}