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

export interface RemoveCartItemResponse extends CartData {}

export interface AddToCartPayload {
  product: string;
  quantity: number;
}

export interface AddToCartResponse extends CartData {}
