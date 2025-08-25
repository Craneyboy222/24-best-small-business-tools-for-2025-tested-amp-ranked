import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { getAdminById, manageUser, manageTool, getPendingReviews } from '../controllers/adminController';
import { verifyToken, isAdmin } from '../middleware/authMiddleware';
import logger from '../utils/logger';

const router = express.Router();

// Middleware for error handling
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error: ${err.message}`);
  res.status(500).json({ error: 'Internal Server Error' });
};

// Middleware for request validation
const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Admin authentication and authorization
router.use(verifyToken);
router.use(isAdmin);

// Get admin profile
// GET /api/admin/profile
router.get('/profile', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const adminId = req.user.id;
    const adminProfile = await getAdminById(adminId);
    res.json(adminProfile);
  } catch (err) {
    next(err);
  }
});

// Manage user accounts
// PUT /api/admin/users/:id
router.put('/users/:id',
  body('status').isIn(['active', 'suspended']).withMessage('Invalid status'),
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = parseInt(req.params.id, 10);
      const { status } = req.body;
      await manageUser(userId, status);
      res.json({ message: 'User status updated successfully' });
    } catch (err) {
      next(err);
    }
  }
);

// Manage tool submissions
// PUT /api/admin/tools/:id
router.put('/tools/:id',
  body('status').isIn(['approved', 'rejected']).withMessage('Invalid status'),
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const toolId = parseInt(req.params.id, 10);
      const { status } = req.body;
      await manageTool(toolId, status);
      res.json({ message: 'Tool status updated successfully' });
    } catch (err) {
      next(err);
    }
  }
);

// Get pending reviews
// GET /api/admin/reviews/pending
router.get('/reviews/pending', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pendingReviews = await getPendingReviews();
    res.json(pendingReviews);
  } catch (err) {
    next(err);
  }
});

// Use error handling middleware
router.use(errorHandler);

export default router;
