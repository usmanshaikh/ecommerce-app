import { axios } from '../../hooks/useAxiosInterceptor';
import { API } from '../../utils/constants';
import type { ApiResponse } from '../types';
import type { ProductResponse, CreateProductPayload, UploadProductImageResponse } from './types';

const productApi = {
  getAllProducts(filters: Record<string, any>) {
    const queryParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => queryParams.append(key, v));
      } else {
        queryParams.append(key, value);
      }
    });

    return axios.get<ApiResponse<ProductResponse[]>>(`${API.PRODUCT}?${queryParams.toString()}`);
  },
  getBestSellers() {
    return axios.get<ApiResponse<ProductResponse[]>>(API.BEST_SELLERS);
  },
  getRandomProducts() {
    return axios.get<ApiResponse<ProductResponse[]>>(API.RECOMMENDED);
  },
  getProductById(productId: string) {
    return axios.get<ApiResponse<ProductResponse>>(`${API.PRODUCT}/${productId}`);
  },
  createProduct(payload: CreateProductPayload) {
    return axios.post<ApiResponse<ProductResponse>>(API.PRODUCT, payload);
  },
  uploadProductImage(payload: FormData) {
    return axios.post<ApiResponse<UploadProductImageResponse>>(API.UPLOAD_IMAGE, payload);
  },
};

export default productApi;
