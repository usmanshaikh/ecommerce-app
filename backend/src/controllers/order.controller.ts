import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendResponse } from '../helpers';
import { catchAsync } from '../middlewares';
import { orderService } from '../services';
import { MESSAGES } from '../constants';

export const getUserOrders = catchAsync(async (req: Request, res: Response) => {
  const userId = res.locals.user.userId;
  const orders = await orderService.getOrdersByUser(userId);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: MESSAGES.ORDERS_FETCHED,
    data: orders,
  });
});
