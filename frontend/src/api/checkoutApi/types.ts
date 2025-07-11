import type { Product } from '../types';

export interface StripeOrderItem {
  product: string;
  price: number;
  quantity: number;
}
export interface OrderItem {
  product: Product;
  price: number;
  quantity: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface StripeSessionPayload {
  items: StripeOrderItem[];
  address: Address;
  totalAmount: number;
  paymentMethod: string;
}

export interface StripeSessionResponse {
  url: string;
}

export interface ConfirmOrderResponse {
  orderId: string;
  user: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;
  _id: string;
  orderedAt: string;
}
