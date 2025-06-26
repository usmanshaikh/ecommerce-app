import { axios } from '../../hooks/useAxiosInterceptor';
import { API } from '../../utils/constants';
import type { ApiResponse, BasicResponse, MyProfileResponse, UpdateProfilePayload } from '../types';

const profileApi = {
  myProfile() {
    return axios.get<ApiResponse<MyProfileResponse>>(API.PROFILE);
  },
  updateMyProfile(payload: UpdateProfilePayload) {
    return axios.patch<ApiResponse<MyProfileResponse>>(API.PROFILE, payload);
  },
  deleteMyProfile() {
    return axios.delete<ApiResponse<BasicResponse>>(API.PROFILE);
  },
};

export default profileApi;
