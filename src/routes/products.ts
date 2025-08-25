import express, { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { authenticateToken, isAdmin } from '../middleware/auth';
import { createProduct, getProduct, updateProduct, deleteProduct, listProducts } from '../controllers/productController';

const router = express.Router();

// Middleware for error handling
const handleErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to list all products with optional filters and pagination
router.get('/', authenticateToken, async (req: Request, res: Response) => {
  try {
    const products = await listProducts(req.query);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to create a new product
router.post('/', 
  authenticateToken, 
  isAdmin, 
  body('name').isString().notEmpty(), 
  body('description').isString(), 
  body('category').isString().optional(), 
  body('website_url').isURL().optional(), 
  handleErrors, 
  async (req: Request, res: Response) => {
    try {
      const product = await createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

// Route to get a specific product by ID
router.get('/:id', 
  authenticateToken, 
  param('id').isInt(), 
  handleErrors, 
  async (req: Request, res: Response) => {
    try {
      const product = await getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

// Route to update a product by ID
router.put('/:id', 
  authenticateToken, 
  isAdmin, 
  param('id').isInt(), 
  body('name').isString().optional(), 
  body('description').isString().optional(), 
  body('category').isString().optional(), 
  body('website_url').isURL().optional(), 
  handleErrors, 
  async (req: Request, res: Response) => {
    try {
      const product = await updateProduct(req.params.id, req.body);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

// Route to delete a product by ID
router.delete('/:id', 
  authenticateToken, 
  isAdmin, 
  param('id').isInt(), 
  handleErrors, 
  async (req: Request, res: Response) => {
    try {
      const success = await deleteProduct(req.params.id);
      if (!success) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

export default router;
