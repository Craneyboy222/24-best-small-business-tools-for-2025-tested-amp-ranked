import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';
import { body, validationResult } from 'express-validator';

// PostgreSQL pool setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// TypeScript Types
interface User {
  id: number;
  username: string;
  password_hash: string;
  email: string;
  created_at: Date;
}

// User Registration
export const registerUser = [
  body('username').isString().notEmpty(),
  body('password').isString().isLength({ min: 6 }),
  body('email').isEmail(),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, email } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        'INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING *',
        [username, hashedPassword, email]
      );
      const user: User = result.rows[0];
      res.status(201).json(user);
    } catch (error) {
      console.error('Registration Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
];

// User Login
export const loginUser = [
  body('username').isString().notEmpty(),
  body('password').isString().notEmpty(),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      const user: User = result.rows[0];

      if (!user) {
        return res.status(401).json({ error: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid Credentials' });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
];

// Middleware for authentication
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET!, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Get User Profile
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user.userId;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    const user: User = result.rows[0];

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Profile Retrieval Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
