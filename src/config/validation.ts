import { body, param, query } from 'express-validator';

export const registerValidation = [
  body('username').isString().isLength({ min: 3, max: 255 }),
  body('password').isString().isLength({ min: 8 }),
  body('email').isEmail()
];

export const toolSubmissionValidation = [
  body('name').isString().isLength({ min: 1, max: 255 }),
  body('description').isString().isLength({ min: 1 }),
  body('category').optional().isString()
];