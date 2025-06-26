import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import loaderReducer from './slices/loaderSlice';
import snackbarReducer from './slices/snackbarSlice';
import wishlistReducer from './slices/wishlistSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    loader: loaderReducer,
    snackbar: snackbarReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
