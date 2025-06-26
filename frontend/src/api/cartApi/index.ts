import { axios } from '../../hooks/useAxiosInterceptor';
import { API } from '../../utils/constants';
import type { AddToCartResponse, ApiResponse, CartItem, CartResponse, RemoveCartItemResponse } from '../types';

const cartApi = {
  getCart() {
    return axios.get<ApiResponse<CartResponse[]>>(API.CART);
  },
  addToCart(payload: CartItem) {
    return axios.post<ApiResponse<AddToCartResponse>>(API.CART_ADD, payload);
  },
  removeItemFromCart(productId: string) {
    return axios.delete<RemoveCartItemResponse>(`${API.CART_REMOVE}/${productId}`);
  },
};

export default cartApi;
