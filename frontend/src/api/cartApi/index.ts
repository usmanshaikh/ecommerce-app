import { axios } from '../../hooks/useAxiosInterceptor';
import { API } from '../../utils/constants';
import type { AddToCartPayload, AddToCartResponse, ApiResponse, CartResponse } from '../types';

const cartApi = {
  getCart() {
    return axios.get<ApiResponse<CartResponse[]>>(API.CART);
  },
  addToCart(payload: AddToCartPayload) {
    return axios.post<ApiResponse<AddToCartResponse>>(API.CART_ADD, payload);
  },
  removeItemFromCart(productId: string) {
    return axios.delete<ApiResponse<CartResponse[]>>(`${API.CART_REMOVE}/${productId}`);
  },
};

export default cartApi;
