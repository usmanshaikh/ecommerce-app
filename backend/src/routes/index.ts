import express from 'express';
import authRoute from './auth.routes';
import profileRoute from './profile.routes';
import productRoute from './product.routes';
import cartRoute from './cart.routes';
import checkoutRoute from './checkout.routes';
import orderRoute from './order.routes';
import healthRoute from './health.routes';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/profile',
    route: profileRoute,
  },
  {
    path: '/product',
    route: productRoute,
  },
  {
    path: '/cart',
    route: cartRoute,
  },
  {
    path: '/checkout',
    route: checkoutRoute,
  },
  {
    path: '/order',
    route: orderRoute,
  },
  {
    path: '/health',
    route: healthRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
