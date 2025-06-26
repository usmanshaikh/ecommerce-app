import express from 'express';
import authRoute from './auth.routes';
import profileRoute from './profile.routes';
import productRoute from './product.routes';
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
    path: '/health',
    route: healthRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
