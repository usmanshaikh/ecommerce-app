import { cartApi } from '@api';
import type { Product } from '@api/types';
import { setCartCount, showSnackbar } from '@store/slices';
import { useAppDispatch, useAppSelector } from './useReduxHooks';

export const useAddToCart = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const handleAddToCart = async (item: Product) => {
    if (!isLoggedIn) {
      dispatch(showSnackbar({ message: 'Please login to add items to cart', type: 'error' }));
      return;
    }

    const payload = { productId: item._id, quantity: 1 };

    try {
      const res = await cartApi.addToCart(payload);
      if (res.data.status === 'success') {
        dispatch(showSnackbar({ message: 'Added to cart', type: 'success' }));

        const cartRes = await cartApi.getCart();
        const items = cartRes.data.data;
        const count = items.reduce((total: number, item: any) => total + item.quantity, 0);
        dispatch(setCartCount(count));
      }
    } catch (error) {
      dispatch(showSnackbar({ message: 'Something went wrong', type: 'error' }));
    }
  };

  return { handleAddToCart };
};
