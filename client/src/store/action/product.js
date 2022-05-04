import { productAction } from "../slice/product";
import ApiService from '../../serices/api';

export const getProducts = (catId) => {
    return async (dispatch) => {
        try {
            dispatch(productAction.setLoader());
            let products = await ApiService.getApi('/products');
            if (products.status) {
                let filteredProduct = products.data;
                if (catId) {
                    filteredProduct = products.data.filter(product =>  product.category === catId);
                }
                dispatch(productAction.setProduct(filteredProduct));
            }
        } catch (error) {
            dispatch(productAction.setError(error));
        }
        
    }
}