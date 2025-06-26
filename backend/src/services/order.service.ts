import Order from '../models/order.model';

export const createOrderFromCheckout = async (checkout: any) => {
  const orderId = 'ORDER-' + Math.random().toString(36).slice(2, 11).toUpperCase();

  const order = new Order({
    orderId,
    user: checkout.user,
    items: checkout.items,
    totalAmount: checkout.totalAmount,
    paymentMethod: checkout.paymentMethod,
    paymentStatus: checkout.paymentStatus || 'success',
  });

  return await order.save();
};

export const getOrdersByUser = async (userId: string) => {
  return await Order.find({ user: userId }).sort({ createdAt: -1 });
};
