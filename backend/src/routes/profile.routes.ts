import express from 'express';
import { profileController } from '../controllers';
import { authenticateJWT, validate } from '../middlewares';

import { profileValidation } from '../validations';

const router = express.Router();

router
  .route('/')
  .get(authenticateJWT, profileController.getProfile)
  .delete(authenticateJWT, profileController.deleteProfile)
  .patch(authenticateJWT, validate(profileValidation.updateProfile), profileController.updateProfile);

export default router;
