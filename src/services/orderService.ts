import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Order } from '../entities/Order';
import { validate } from 'class-validator';
import { authenticateUser } from '../middleware/authentication';
import { authorizeUser } from '../middleware/authorization';
import { createLogger } from '../utils/logger';

const logger = createLogger('OrderService');

// Order creation
export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await authenticateUser(req.headers.authorization);
    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const orderData = req.body;
    const orderRepository = getRepository(Order);

    // Validate order data
    const newOrder = orderRepository.create(orderData);
    const errors = await validate(newOrder);
    if (errors.length > 0) {
      return res.status(400).json({ error: 'Invalid order data', details: errors });
    }

    // Save order to database
    await orderRepository.save(newOrder);
    logger.info(`Order created with ID: ${newOrder.id}`);
    return res.status(201).json(newOrder);
  } catch (error) {
    logger.error(`Error creating order: ${error.message}`);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Order retrieval
export const getOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await authenticateUser(req.headers.authorization);
    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const orderId = req.params.id;
    const orderRepository = getRepository(Order);
    const order = await orderRepository.findOne(orderId);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Ensure user is authorized to view the order
    if (!authorizeUser(user, order)) {
      return res.status(403).json({ error: 'User not authorized to view this order' });
    }

    logger.info(`Order retrieved with ID: ${orderId}`);
    return res.status(200).json(order);
  } catch (error) {
    logger.error(`Error retrieving order: ${error.message}`);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Order update
export const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await authenticateUser(req.headers.authorization);
    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const orderId = req.params.id;
    const orderData = req.body;
    const orderRepository = getRepository(Order);
    const order = await orderRepository.findOne(orderId);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Ensure user is authorized to update the order
    if (!authorizeUser(user, order)) {
      return res.status(403).json({ error: 'User not authorized to update this order' });
    }

    // Validate and update order data
    const updatedOrder = orderRepository.merge(order, orderData);
    const errors = await validate(updatedOrder);
    if (errors.length > 0) {
      return res.status(400).json({ error: 'Invalid order data', details: errors });
    }

    await orderRepository.save(updatedOrder);
    logger.info(`Order updated with ID: ${orderId}`);
    return res.status(200).json(updatedOrder);
  } catch (error) {
    logger.error(`Error updating order: ${error.message}`);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Order deletion
export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await authenticateUser(req.headers.authorization);
    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const orderId = req.params.id;
    const orderRepository = getRepository(Order);
    const order = await orderRepository.findOne(orderId);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Ensure user is authorized to delete the order
    if (!authorizeUser(user, order)) {
      return res.status(403).json({ error: 'User not authorized to delete this order' });
    }

    await orderRepository.remove(order);
    logger.info(`Order deleted with ID: ${orderId}`);
    return res.status(204).send();
  } catch (error) {
    logger.error(`Error deleting order: ${error.message}`);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
