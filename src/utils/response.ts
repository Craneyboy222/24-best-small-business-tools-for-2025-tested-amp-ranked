import { Response } from 'express';

export const successResponse = (res: Response, data: any, message = 'Success') => {
  return res.status(200).json({
    status: 'success',
    message,
    data
  });
};

export const errorResponse = (res: Response, error: any, message = 'An error occurred') => {
  return res.status(500).json({
    status: 'error',
    message,
    error
  });
};
