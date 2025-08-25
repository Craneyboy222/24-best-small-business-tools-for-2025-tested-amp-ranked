import express, { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { verifyToken } from '../middleware/authMiddleware';
import { createOrder, getOrder, updateOrderStatus, deleteOrder } from '../controllers/orderController';
import { Order, OrderStatus } from '../types/orderTypes';
import logger from '../utils/logger';

const router = express.Router();

// Middleware for error handling
function handleErrors(err: Error, req: Request, res: Response, next: NextFunction) {
  logger.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
}

// Validate order data
const validateOrder = [
  body('userId').isInt().withMessage('User ID must be an integer'),
  body('toolId').isInt().withMessage('Tool ID must be an integer'),
  body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
  body('status').isIn(Object.values(OrderStatus)).withMessage('Invalid status'),
];

// Route to create a new order
router.post(
  '/',
  verifyToken,
  validateOrder,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const orderData: Order = req.body;
      const newOrder = await createOrder(orderData);
      res.status(201).json(newOrder);
    } catch (error) {
      handleErrors(error, req, res, () => {});
    }
  }
);

// Route to get an order by ID
router.get(
  '/:id',
  verifyToken,
  param('id').isInt().withMessage('Order ID must be an integer'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const orderId = parseInt(req.params.id, 10);
      const order = await getOrder(orderId);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      handleErrors(error, req, res, () => {});
    }
  }
);

// Route to update order status
router.patch(
  '/:id/status',
  verifyToken,
  param('id').isInt().withMessage('Order ID must be an integer'),
  body('status').isIn(Object.values(OrderStatus)).withMessage('Invalid status'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const orderId = parseInt(req.params.id, 10);
      const { status } = req.body;
      const updatedOrder = await updateOrderStatus(orderId, status);
      if (!updatedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(updatedOrder);
    } catch (error) {
      handleErrors(error, req, res, () => {});
    }
  }
);

// Route to delete an order
router.delete(
  '/:id',
  verifyToken,
  param('id').isInt().withMessage('Order ID must be an integer'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const orderId = parseInt(req.params.id, 10);
      const result = await deleteOrder(orderId);
      if (!result) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.status(204).send();
    } catch (error) {
      handleErrors(error, req, res, () => {});
    }
  }
);

export default router;