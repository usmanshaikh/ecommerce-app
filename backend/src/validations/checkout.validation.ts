import Joi from 'joi';

export const createStripeSession = {
  body: Joi.object({
    items: Joi.array()
      .items(
        Joi.object({
          product: Joi.string().required(),
          price: Joi.number().required().min(0),
          quantity: Joi.number().required().min(1),
        }),
      )
      .min(1)
      .required(),

    address: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      country: Joi.string().required(),
      pincode: Joi.string().required(),
    }).required(),

    totalAmount: Joi.number().required().min(1),
    paymentMethod: Joi.string().valid('cod', 'card', 'upi').required(),
  }),
};

export const confirmStripeOrder = {
  query: Joi.object({
    session_id: Joi.string().required(),
  }),
};
