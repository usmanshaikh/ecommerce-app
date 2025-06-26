import { Types } from 'mongoose';
import Cart from '../models/cart.model';

export const getCartByUserId = async (userId: string) => {
  return await Cart.findOne({ user: userId }).populate('items.product');
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
  const cart = await Cart.findOne({ user: userId });
  if (!cart) return null;

  cart.items = cart.items.filter((item) => item.product.toString() !== productId);
  return await cart.save();
};
