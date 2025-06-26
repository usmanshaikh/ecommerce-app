import { cartApi } from '@api';
import type { Product } from '@api/types';
import { showSnackbar } from '@store/slices';
import { useAppDispatch, useAppSelector } from './useReduxHooks';

export const useAddToCart = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const handleAddToCart = (item: Product) => {
    if (!isLoggedIn) {
      dispatch(showSnackbar({ message: 'Please login to add items to cart', type: 'error' }));
      return;
    }

    const payload = { productId: item._id, quantity: 1 };
    cartApi.addToCart(payload).then((res) => {
      if (res.data.status === 'success') {
        dispatch(showSnackbar({ message: 'Added to cart', type: 'success' }));
      }
    });
  };

  return { handleAddToCart };
};
