import { Request, Response } from 'express';
import { catchAsync } from '../middlewares';
import { cartService } from '../services';
import { sendResponse } from '../helpers';
import { StatusCodes } from 'http-status-codes';
import { MESSAGES } from '../constants';

export const getCart = catchAsync(async (req: Request, res: Response) => {
  const userId = res.locals.user.userId;
  const cart = await cartService.getCartByUserId(userId);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: MESSAGES.CART_FETCHED,
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
    message: MESSAGES.CART_ITEM_ADDED,
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
    message: MESSAGES.CART_ITEM_REMOVED,
    data: cart,
  });
});
