import type { LoginResponse, RefreshResponse, RegisterResponse, RegisterPayload, LoginPayload } from './authApi/types';
import type { AddToCartPayload, AddToCartResponse, CartData, CartItem, CartResponse } from './cartApi/types';
import type {
  StripeSessionPayload,
  StripeSessionResponse,
  ConfirmOrderResponse,
  OrderItem,
  Address,
  StripeOrderItem,
} from './checkoutApi/types';
import type { OrderResponse } from './orderApi/types';
import type { Product, ProductResponse, CreateProductPayload, UploadProductImageResponse } from './productApi/types';
import type { MyProfileResponse, UpdateProfilePayload } from './profileApi/types';

type NoContentResponse = void;

interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

interface BasicResponse {
  status: string;
  message: string;
}

export type {
  ApiResponse,
  BasicResponse,
  NoContentResponse,
  LoginPayload,
  LoginResponse,
  RegisterResponse,
  RegisterPayload,
  RefreshResponse,
  // Cart
  CartResponse,
  AddToCartPayload,
  AddToCartResponse,
  CartItem,
  CartData,
  // Checkout
  StripeSessionPayload,
  StripeSessionResponse,
  ConfirmOrderResponse,
  OrderItem,
  Address,
  StripeOrderItem,
  // Order
  OrderResponse,
  // Product
  Product,
  ProductResponse,
  CreateProductPayload,
  UploadProductImageResponse,
  // Profile
  MyProfileResponse,
  UpdateProfilePayload,
};
