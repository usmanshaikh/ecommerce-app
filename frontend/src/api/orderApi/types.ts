import type { OrderItem } from '../types';

export interface OrderResponse {
  _id: string;
  orderId: string;
  user: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;
  orderedAt: string;
}
