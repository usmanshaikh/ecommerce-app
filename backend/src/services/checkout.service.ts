import Checkout from '../models/checkout.model';
import { checkoutInterface } from '../interfaces';

export const saveCheckout = async (data: checkoutInterface.ICheckout) => {
  return await Checkout.create(data);
};

export const getCheckoutByUser = async (userId: string) => {
  return await Checkout.findOne({ user: userId }).populate('items.product');
};

export const deleteCheckoutByUser = async (userId: string) => {
  return await Checkout.findOneAndDelete({ user: userId });
};
