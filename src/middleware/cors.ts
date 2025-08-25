import cors from 'cors';
import { RequestHandler } from 'express';

/**
 * CORS configuration middleware
 */
export const corsOptions: RequestHandler = cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
});