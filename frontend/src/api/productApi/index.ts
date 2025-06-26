import { axios } from '../../hooks/useAxiosInterceptor';
import { API } from '../../utils/constants';
import type { ApiResponse } from '../types';
import type { ProductResponse, CreateProductPayload, UploadProductImageResponse } from './types';

const productApi = {
  getAllProducts() {
    return axios.get<ApiResponse<ProductResponse[]>>(API.PRODUCT);
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
