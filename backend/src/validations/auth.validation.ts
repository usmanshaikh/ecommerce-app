import Joi from 'joi';
import { MESSAGES } from '../constants';

export const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).message(MESSAGES.PASSWORD_REQUIREMENTS),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
};

export const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

export const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};
