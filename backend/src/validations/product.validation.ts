import Joi from 'joi';

export const addProduct = {
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().required(),
    images: Joi.array().items(Joi.string().uri()).min(1).required(),
    petType: Joi.string().valid('cat', 'dog').required(),
    category: Joi.string().valid('cat food', 'cat toy', 'dog food', 'dog toy').required(),
    brand: Joi.string().required(),
    stock: Joi.number().min(0).required(),
    isActive: Joi.boolean().optional(),
    isFeatured: Joi.boolean().optional(),
  }),
};
