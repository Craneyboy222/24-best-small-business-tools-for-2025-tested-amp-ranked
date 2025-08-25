import Joi from 'joi';

export const userValidationSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required()
});

export const toolValidationSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  description: Joi.string().required(),
  category: Joi.string().max(255),
  website_url: Joi.string().uri().optional()
});