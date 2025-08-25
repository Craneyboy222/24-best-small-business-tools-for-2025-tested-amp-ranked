import fs from 'fs';
import { Request } from 'express';

export const logSecurityEvent = (req: Request, event: string) => {
  const log = `${new Date().toISOString()} - ${req.ip} - ${event}\n`;
  fs.appendFile('security.log', log, err => {
    if (err) {
      console.error('Failed to log security event:', err);
    }
  });
};