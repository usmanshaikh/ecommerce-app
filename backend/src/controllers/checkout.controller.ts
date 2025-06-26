import { Request, Response } from 'express';
import { catchAsync } from '../middlewares';
import { sendResponse } from '../helpers';
import { StatusCodes } from 'http-status-codes';
import { checkoutService, orderService } from '../services';
import { stripe } from '../config/stripe';
import { Product } from '../models';
import config from '../config/config';
import { MESSAGES } from '../constants';

export const createStripeSession = catchAsync(async (req: Request, res: Response) => {
  const userId = res.locals.user.userId;
  const { items, address, totalAmount, paymentMethod } = req.body;

  const productIds = items.map((item: any) => item.product);
  const products = await Product.find({ _id: { $in: productIds } });

  const lineItems = items.map((item: any) => {
    const product = products.find((p: any) => p._id.toString() === item.product);
    return {
      price_data: {
        currency: 'inr',
        unit_amount: item.price * 100,
        product_data: {
          name: product?.name || 'Unnamed Product',
        },
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: lineItems,
    success_url: `${config.origin_url}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${config.origin_url}/checkout-failed`,
    metadata: {
      userId,
    },
  });

  await checkoutService.saveCheckout({
    user: userId,
    items,
    address,
    totalAmount,
    paymentMethod,
    paymentStatus: 'pending',
  } as any);

  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: MESSAGES.STRIPE_SESSION_CREATED,
    data: { url: session.url },
  });
});

export const confirmStripeOrder = catchAsync(async (req: Request, res: Response) => {
  const sessionId = req.query.session_id as string;

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const userId = session.metadata?.userId!;

  const checkout = await checkoutService.getCheckoutByUser(userId);

  if (!checkout) {
    return res.status(404).json({ message: MESSAGES.CHECKOUT_NOT_FOUND });
  }

  const order = await orderService.createOrderFromCheckout({
    ...checkout.toObject(),
    paymentStatus: 'success',
  });

  await checkoutService.deleteCheckoutByUser(userId);

  sendResponse({
    res,
    statusCode: 200,
    message: MESSAGES.ORDER_PLACED_SUCCESS,
    data: order,
  });
});
