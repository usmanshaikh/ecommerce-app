import { Schema, model, Document, Types } from 'mongoose';

export interface ICheckoutItem {
  product: Types.ObjectId;
  quantity: number;
  price: number;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface ICheckout extends Document {
  user: Types.ObjectId;
  items: ICheckoutItem[];
  address: IAddress;
  totalAmount: number;
  paymentStatus: 'pending' | 'success' | 'failed';
  paymentMethod: 'cod' | 'card' | 'upi';
  createdAt: Date;
  updatedAt: Date;
}
