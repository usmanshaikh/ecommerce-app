import express from 'express';
import { orderController } from '../controllers';
import authenticateJWT from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', authenticateJWT, orderController.getUserOrders);

export default router;
