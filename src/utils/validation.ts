import Joi from 'joi';

export const validateUserRegistration = (data: any) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
};

export const validateToolSubmission = (data: any) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    website_url: Joi.string().uri().optional()
  });
  return schema.validate(data);
};
