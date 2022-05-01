import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/auth';
import bannerReducer from './slice/banner';
import cartReducer from './slice/cart';
import categoryReducer from './slice/category';
import productReducer from './slice/product';
export const store = configureStore({
  reducer: {
      auth: authReducer.reducer,
      banner: bannerReducer.reducer,
      category: categoryReducer.reducer,
      product: productReducer.reducer,
      cart: cartReducer.reducer
  },
})

export default store;