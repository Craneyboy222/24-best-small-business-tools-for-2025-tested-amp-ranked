import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

export const testRequest = (data: any): Request => {
  return {
    ...data,
  } as Request;
};

export const testResponse = (): Response => {
  const res = {} as Response;
  res.status = jest.fn().testReturnValue(res);
  res.json = jest.fn().testReturnValue(res);
  return res;
};

export const getToken = async (): Promise<string> => {
  // test token generation
  return jwt.sign({ id: 1, username: 'e2euser' }, 'secret', { expiresIn: '1h' });
};