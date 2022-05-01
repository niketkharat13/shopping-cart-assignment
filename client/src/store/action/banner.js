import { bannerAction } from "../slice/banner";
import ApiService from '../../serices/api';

export const getBanner = () => {
    return async (dispatch) => {
        try {
            dispatch(bannerAction.setLoader());
            await ApiService.getApi('/banners')
            .then(resp => {
                console.log(resp, "resp");
                if (resp.status) {
                    dispatch(bannerAction.setBanners(resp.data))
                }
            });
        } catch (error) {
            dispatch(bannerAction.setLoader())
        }
    }
}