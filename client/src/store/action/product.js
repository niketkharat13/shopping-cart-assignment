import { productAction } from "../slice/product";
import ApiService from '../../serices/api';

export const getProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(productAction.setLoader());
            let products = await ApiService.getApi('/products');
            if (products.status) {
                dispatch(productAction.setProduct(products.data));
            }
        } catch (error) {
            dispatch(productAction.setError(error));
        }
        
    }
}