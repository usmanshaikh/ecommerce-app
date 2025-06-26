import Joi from 'joi';

export const addToCart = {
  body: Joi.object().keys({
    productId: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required(),
  }),
};

export const removeItemFromCart = {
  params: Joi.object().keys({
    productId: Joi.string().hex().length(24).required(),
  }),
};
