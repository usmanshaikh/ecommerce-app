import express from 'express';
import { checkoutController } from '../controllers';
import { checkoutValidation } from '../validations';
import { authenticateJWT, validate } from '../middlewares';

const router = express.Router();

router.post(
  '/stripe-session',
  authenticateJWT,
  validate(checkoutValidation.createStripeSession),
  checkoutController.createStripeSession,
);
router.get(
  '/confirm-order',
  authenticateJWT,
  validate(checkoutValidation.confirmStripeOrder),
  checkoutController.confirmStripeOrder,
);

export default router;
