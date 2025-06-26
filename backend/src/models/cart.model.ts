import mongoose, { Schema, Model } from 'mongoose';
import { cartInterface } from '../interfaces';

const cartItemSchema = new Schema<cartInterface.ICartItem>(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false }, // don't generate an _id for each item
);

const cartSchema = new Schema<cartInterface.ICart>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    items: [cartItemSchema],
  },
  { timestamps: true },
);

const Cart: Model<cartInterface.ICart> = mongoose.model<cartInterface.ICart>('Cart', cartSchema);

export default Cart;
