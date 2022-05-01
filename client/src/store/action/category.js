import { categoryAction } from "../slice/category";
import ApiService from '../../serices/api';

export const getCategories  = () => {
    return async (dispatch) => {
        try {
            dispatch(categoryAction.setLoader());
            let category = await ApiService.getApi('/categories');
            let activeCategory = category.data.filter(category => category.order >= 0)
            if (category.status) {
                dispatch(categoryAction.setCategories(activeCategory))
            }
        } catch (error) {
            dispatch(categoryAction.setError(error))
        }
    }
}

export const fetchProductByCategory = () => {
    return async (dispatch) => {
        try {
            dispatch(categoryAction.setLoader());
            let category = await ApiService.getApi('/products');
            if (category.status) {
                dispatch(categoryAction.setCategories())
            }
        } catch (error) {
            dispatch(categoryAction.setError())
        }
    }
}