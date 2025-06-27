import { axios } from '../../hooks/useAxiosInterceptor';
import { API } from '../../utils/constants';
import type { ApiResponse, ConfirmOrderResponse, StripeSessionPayload, StripeSessionResponse } from '../types';

const checkoutApi = {
  createStripeSession(payload: StripeSessionPayload) {
    return axios.post<ApiResponse<StripeSessionResponse>>(API.CHECKOUT_STRIPE_SESSION, payload);
  },
  confirmStripeOrder(sessionId: string) {
    return axios.get<ApiResponse<ConfirmOrderResponse>>(`${API.CHECKOUT_CONFIRM_ORDER}?session_id=${sessionId}`);
  },
};

export default checkoutApi;
