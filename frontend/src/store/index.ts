import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import loaderReducer from './slices/loaderSlice';
import snackbarReducer from './slices/snackbarSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    loader: loaderReducer,
    snackbar: snackbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
