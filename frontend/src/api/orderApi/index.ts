import { axios } from '../../hooks/useAxiosInterceptor';
import { API } from '../../utils/constants';
import type { ApiResponse, OrderResponse } from '../types';

const orderApi = {
  getUserOrders() {
    return axios.get<ApiResponse<OrderResponse[]>>(`${API.ORDER}`);
  },
};

export default orderApi;
