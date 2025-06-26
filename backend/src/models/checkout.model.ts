import mongoose, { Schema, Model } from 'mongoose';
import { checkoutInterface } from '../interfaces';

const addressSchema = new Schema<checkoutInterface.IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true },
});

const checkoutItemSchema = new Schema<checkoutInterface.ICheckoutItem>(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { _id: false }, // don't generate an _id for each item
);

const checkoutSchema = new Schema<checkoutInterface.ICheckout>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [checkoutItemSchema],
    address: { type: addressSchema, required: true },
    totalAmount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['cod', 'card', 'upi'],
      required: true,
    },
  },
  { timestamps: true },
);

const Checkout: Model<checkoutInterface.ICheckout> = mongoose.model<checkoutInterface.ICheckout>('Checkout', checkoutSchema);

export default Checkout;
