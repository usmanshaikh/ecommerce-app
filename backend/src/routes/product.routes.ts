import express from 'express';
import { productController } from '../controllers';
import { productImageUpload } from '../helpers';
import { productValidation } from '../validations';
import { validate } from '../middlewares';

const router = express.Router();

router
  .route('/')
  .get(productController.getAllProducts)
  .post(validate(productValidation.addProduct), productController.createProduct);
router.get('/best-sellers', productController.getBestSellers);
router.get('/recommended', productController.getRandomProducts);
router.get('/:productId', productController.getProductById);
router.post('/upload-image', productImageUpload.single('image'), productController.uploadProductImage);

export default router;
