import { axios, NO_LOADER } from '../../hooks/useAxiosInterceptor';
import { API } from '../../utils/constants';
import type {
  ApiResponse,
  BasicResponse,
  LoginPayload,
  LoginResponse,
  RefreshResponse,
  RegisterPayload,
  RegisterResponse,
} from '../types';

const authApi = {
  register(payload: RegisterPayload) {
    return axios.post<ApiResponse<RegisterResponse>>(API.REGISTER, payload);
  },
  login(payload: LoginPayload) {
    return axios.post<ApiResponse<LoginResponse>>(API.LOGIN, payload);
  },
  logout(payload: { refreshToken: string }) {
    return axios.post<BasicResponse>(API.LOGOUT, payload);
  },
  refreshTokens(payload: { refreshToken: string }) {
    return axios.post<ApiResponse<RefreshResponse>>(API.REFRESH_TOKENS, payload, NO_LOADER);
  },
};

export default authApi;
