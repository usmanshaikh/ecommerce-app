import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { MESSAGES } from '../constants';
import { ApiError, sendResponse } from '../helpers';
import { catchAsync } from '../middlewares';
import { productService } from '../services';

export const createProduct = catchAsync(async (req: Request, res: Response) => {
  const product = await productService.createProduct(req.body);
  sendResponse({
    res,
    statusCode: StatusCodes.CREATED,
    message: MESSAGES.PRODUCT_CREATED,
    data: product,
  });
});

export const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const filters = req.query;
  const products = await productService.getAllProducts(filters);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    data: products,
  });
});

export const getProductById = catchAsync(async (req: Request, res: Response) => {
  const product = await productService.getProductById(req.params.productId);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    data: product,
  });
});

export const getBestSellers = catchAsync(async (req: Request, res: Response) => {
  const products = await productService.getBestSellers();
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    data: products,
  });
});

export const getRandomProducts = catchAsync(async (req: Request, res: Response) => {
  const products = await productService.getRandomProducts();
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    data: products,
  });
});

export const uploadProductImage = catchAsync(async (req: Request, res: Response) => {
  const file = req.file as Express.Multer.File & { location?: string };

  if (!file?.location) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Image upload failed');
  }

  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: MESSAGES.IMAGE_UPLOAD_SUCCESS,
    data: { imageUrl: file.location },
  });
});
