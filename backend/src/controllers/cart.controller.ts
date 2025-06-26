import { Request, Response } from 'express';
import { catchAsync } from '../middlewares';
import { cartService } from '../services';
import { sendResponse } from '../helpers';
import { StatusCodes } from 'http-status-codes';

export const getCart = catchAsync(async (req: Request, res: Response) => {
  const userId = res.locals.user.userId;
  const cart = await cartService.getCartByUserId(userId);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: 'Cart fetched',
    data: cart?.items || [],
  });
});

export const addItem = catchAsync(async (req: Request, res: Response) => {
  const userId = res.locals.user.userId;
  const { productId, quantity } = req.body;
  const cart = await cartService.addItemToCart(userId, productId, quantity);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: 'Item added to cart',
    data: cart,
  });
});

export const removeItem = catchAsync(async (req: Request, res: Response) => {
  const userId = res.locals.user.userId;
  const { productId } = req.params;
  const cart = await cartService.removeItemFromCart(userId, productId);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: 'Item removed from cart',
    data: cart,
  });
});
