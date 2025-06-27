import type { Product } from '../types';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartData {
  _id: string;
  user: string;
  items: CartItem[];
}

export interface CartResponse extends CartItem {}

export interface AddToCartPayload {
  productId: string;
  quantity: number;
}

export interface AddToCartResponse extends CartData {}
