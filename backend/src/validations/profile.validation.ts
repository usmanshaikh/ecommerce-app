import Joi from 'joi';

export const updateProfile = {
  body: Joi.object()
    .keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phone: Joi.string()
        .pattern(/^[6-9]\d{9}$/)
        .required(),
      profileImage: Joi.string().uri(),
      address: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        country: Joi.string().required(),
        pincode: Joi.string().required(),
      }).required(),
    })
    .required(),
};
