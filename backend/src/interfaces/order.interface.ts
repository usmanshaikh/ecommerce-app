import { Types, Document } from 'mongoose';

export interface IOrderItem {
  product: Types.ObjectId;
  quantity: number;
  price: number;
}

export interface IOrder extends Document {
  orderId: string;
  user: Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  paymentMethod: 'cod' | 'card' | 'upi';
  paymentStatus: 'pending' | 'success' | 'failed';
  orderStatus: 'placed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderedAt: Date;
  updatedAt: Date;
}
