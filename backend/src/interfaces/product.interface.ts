import { Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  images: string[];
  petType: 'cat' | 'dog';
  category: 'cat food' | 'cat toy' | 'dog food' | 'dog toy';
  brand: String;
  stock: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
