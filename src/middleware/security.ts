import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});

// CORS configuration
const corsOptions = {
  origin: 'https://yourdomain.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Password hashing
const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Input validation middleware
const validateInput = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Security headers
const securityHeaders = helmet();

// Session management
const sessionTimeout = (req: Request, res: Response, next: NextFunction) => {
  const maxSessionAge = 30 * 60 * 1000; // 30 minutes
  if (req.session) {
    if (Date.now() - req.session.lastAccess > maxSessionAge) {
      req.session.destroy(err => {
        if (err) {
          return res.status(500).json({ message: 'Failed to destroy session' });
        }
        res.status(401).json({ message: 'Session expired, please log in again' });
      });
    } else {
      req.session.lastAccess = Date.now();
      next();
    }
  } else {
    next();
  }
};

// Audit logging
const auditLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`AUDIT: ${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
  next();
};

// Security middleware
const securityMiddleware = [
  limiter,
  cors(corsOptions),
  securityHeaders,
  auditLogger,
  sessionTimeout,
  validateInput
];

export { securityMiddleware, hashPassword };