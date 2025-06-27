import { Types } from 'mongoose';
import Cart from '../models/cart.model';
import { ApiError } from '../helpers';
import { StatusCodes } from 'http-status-codes';
import { MESSAGES } from '../constants';

export const getCartByUserId = async (userId: string) => {
  return await Cart.findOne({ user: userId }).populate({
    path: 'items.product',
    select: '_id name description price images',
  });
};

export const addItemToCart = async (userId: string, productId: string, quantity: number) => {
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = new Cart({
      user: userId,
      items: [{ product: productId, quantity }],
    });
  } else {
    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: new Types.ObjectId(productId), quantity });
    }
  }

  return await cart.save();
};

export const removeItemFromCart = async (userId: string, productId: string) => {
  const cart = await Cart.findOne({ user: userId }).populate({
    path: 'items.product',
    select: '_id name description price images',
  });

  if (!cart) return null;

  const originalLength = cart.items.length;
  cart.items = cart.items.filter((item) => item.product._id.toString() !== productId);

  if (cart.items.length === originalLength) {
    throw new ApiError(StatusCodes.NOT_FOUND, MESSAGES.PRODUCT_NOT_FOUND_IN_CART);
  }

  return await cart.save();
};

export const clearCartByUser = async (userId: string) => {
  await Cart.findOneAndUpdate({ user: userId }, { $set: { items: [] } });
};
