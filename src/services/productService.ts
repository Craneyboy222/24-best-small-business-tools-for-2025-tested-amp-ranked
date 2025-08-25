import { Request, Response, NextFunction } from 'express';
import { Pool } from 'pg';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Middleware for JWT authentication
export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Request validation middleware
export const validateToolSubmission = [
  body('name').isString().notEmpty(),
  body('description').isString().notEmpty(),
  body('category').isString().optional(),
  body('website_url').isURL().optional(),
];

// Error handling middleware
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
};

// Service for tool submission
export const submitTool = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, category, website_url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tools (name, description, category, website_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, category, website_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error submitting tool:', err);
    res.status(500).json({ message: 'Failed to submit tool' });
  }
};

// Service for retrieving tools
export const getTools = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM tools');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error retrieving tools:', err);
    res.status(500).json({ message: 'Failed to retrieve tools' });
  }
};

// Service for tool review submission
export const submitReview = async (req: Request, res: Response) => {
  const { toolId, rating, comment } = req.body;
  if (!toolId || !rating) {
    return res.status(400).json({ message: 'Tool ID and rating are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO reviews (user_id, tool_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.user.id, toolId, rating, comment]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error submitting review:', err);
    res.status(500).json({ message: 'Failed to submit review' });
  }
};

// Service for retrieving reviews for a tool
export const getReviewsForTool = async (req: Request, res: Response) => {
  const { toolId } = req.params;
  try {
    const result = await pool.query('SELECT * FROM reviews WHERE tool_id = $1', [toolId]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error retrieving reviews:', err);
    res.status(500).json({ message: 'Failed to retrieve reviews' });
  }
};

// Export all services
export default {
  authenticateJWT,
  validateToolSubmission,
  errorHandler,
  submitTool,
  getTools,
  submitReview,
  getReviewsForTool,
};