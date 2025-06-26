import { axios } from '../../hooks/useAxiosInterceptor';
import { API } from '../../utils/constants';
import type { ApiResponse, ConfirmOrderResponse, StripeSessionPayload } from '../types';

const checkoutApi = {
  createStripeSession(payload: StripeSessionPayload) {
    return axios.post<ApiResponse<StripeSessionPayload[]>>(API.CHECKOUT_STRIPE_SESSION, payload);
  },
  confirmStripeOrder(sessionId: string) {
    return axios.get<ApiResponse<ConfirmOrderResponse>>(`${API.CHECKOUT_CONFIRM_ORDER}?session_id=${sessionId}`);
  },
};

export default checkoutApi;
