import express from 'express';
import { cartController } from '../controllers';
import { authenticateJWT, validate } from '../middlewares';
import { cartValidation } from '../validations';

const router = express.Router();

router.get('/', authenticateJWT, cartController.getCart);
router.post('/add', authenticateJWT, validate(cartValidation.addToCart), cartController.addItem);
router.delete('/remove/:productId', authenticateJWT, validate(cartValidation.removeItemFromCart), cartController.removeItem);

export default router;
