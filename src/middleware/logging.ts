import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';

/**
 * Logging middleware using Morgan
 */
export const loggingMiddleware = morgan('combined', {
  stream: {
    write: (message: string) => console.log(message.trim())
  }
});