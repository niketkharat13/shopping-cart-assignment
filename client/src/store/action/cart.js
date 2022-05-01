// import ApiService from '../../serices/api';
import { cartAction } from '../slice/cart';

export const addToCart = (product) => {
    return dispatch => {
        try {
            dispatch(cartAction.setLoader());
            dispatch(cartAction.addToCart(product))
            /* ApiService.postApi('/addToCart', product).then(resp => {
                if (resp.status) {
                }
            }) */
        } catch (error) {
            dispatch(cartAction.setError(error));
        }
    }
}


export const updateCartProductQnt = (parmas) => {
    return dispatch => {
        try {
            dispatch(cartAction.setLoader())
            dispatch(cartAction.updateCart(parmas))
        } catch (error) {
            dispatch(cartAction.setError(error));
        }
    }
}