import { Request, Response, NextFunction } from 'express';
import { cacheToolData, getToolDataFromCache } from '../services/cache';

export const apiResponseCache = async (req: Request, res: Response, next: NextFunction) => {
  const cacheKey = `${req.method}:${req.originalUrl}`;
  const cachedResponse = await getToolDataFromCache(cacheKey);
  if (cachedResponse) {
    return res.json(cachedResponse);
  }
  const originalSend = res.send.bind(res);
  res.send = (body: any) => {
    cacheToolData(cacheKey, body, 60 * 5); // Cache for 5 minutes
    originalSend(body);
  };
  next();
};