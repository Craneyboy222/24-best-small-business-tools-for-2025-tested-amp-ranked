import { Request, Response } from 'express';

export const checkHealth = (req: Request, res: Response) => {
    res.json({ status: 'healthy' });
};