import { Product, Order } from '../models';

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

  const savedOrder = await order.save();

  // Update sold & stock for each product
  for (const item of checkout.items) {
    await Product.findByIdAndUpdate(item.product, {
      $inc: {
        sold: item.quantity,
        stock: -item.quantity,
      },
    });
  }

  return savedOrder;
};

export const getOrdersByUser = async (userId: string) => {
  return await Order.find({ user: userId }).sort({ createdAt: -1 });
};
