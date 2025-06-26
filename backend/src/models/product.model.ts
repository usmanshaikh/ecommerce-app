import mongoose, { Schema, Model } from 'mongoose';
import { productInterface } from '../interfaces';

const productSchema = new Schema<productInterface.IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    images: [{ type: String }],
    petType: { type: String, enum: ['cat', 'dog'], required: true },
    category: {
      type: String,
      enum: ['cat food', 'cat toy', 'dog food', 'dog toy'],
      required: true,
    },
    brand: { type: String, required: true },
    stock: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Product: Model<productInterface.IProduct> = mongoose.model<productInterface.IProduct>('Product', productSchema);

export default Product;
