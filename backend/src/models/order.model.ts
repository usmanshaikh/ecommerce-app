import mongoose, { Schema, Model } from 'mongoose';
import { orderInterface } from '../interfaces';
import { removeFieldsPlugin } from './plugins';

const orderItemSchema = new Schema<orderInterface.IOrderItem>(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { _id: false }, // don't generate an _id for each item
);

const orderSchema = new Schema<orderInterface.IOrder>(
  {
    orderId: { type: String, required: true, unique: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ['cod', 'card', 'upi'],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      default: 'pending',
    },
    orderStatus: {
      type: String,
      enum: ['placed', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'placed',
    },
    orderedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

orderSchema.plugin(removeFieldsPlugin, ['__v', 'createdAt', 'updatedAt']);

const Order: Model<orderInterface.IOrder> = mongoose.model<orderInterface.IOrder>('Order', orderSchema);

export default Order;
