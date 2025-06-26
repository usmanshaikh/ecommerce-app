import { StatusCodes } from 'http-status-codes';
import { MESSAGES } from '../constants';
import { ApiError } from '../helpers';
import { Product } from '../models';

export const createProduct = async (data: any) => {
  return await Product.create(data);
};

export const getAllProducts = async (filters: any) => {
  const query: any = {};

  // Example: { petType: { $in: ['dog'] } }
  if (filters.petType) {
    query.petType = { $in: Array.isArray(filters.petType) ? filters.petType : [filters.petType] };
  }

  if (filters.category) {
    query.category = { $in: Array.isArray(filters.category) ? filters.category : [filters.category] };
  }

  if (filters.brand) {
    query.brand = { $in: Array.isArray(filters.brand) ? filters.brand : [filters.brand] };
  }

  if (filters.minPrice || filters.maxPrice) {
    query.price = {};
    if (filters.minPrice) query.price.$gte = parseFloat(filters.minPrice);
    if (filters.maxPrice) query.price.$lte = parseFloat(filters.maxPrice);
  }

  return await Product.find(query);
};

export const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(StatusCodes.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
  }
  return product;
};

export const getBestSellers = async () => {
  // descending order -1. Base on sold field. If all sold is 0 then return 8 products
  return await Product.find({ isActive: true }).sort({ sold: -1 }).limit(8);
};

export const getRandomProducts = async () => {
  // $sample - picks random documents
  return await Product.aggregate([{ $match: { isActive: true } }, { $sample: { size: 4 } }]);
};
