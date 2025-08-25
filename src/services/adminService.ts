import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

class AdminService {
  async checkAdminPrivileges(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      const userRepository = getRepository(User);
      const user = await userRepository.findOne(decoded.id);

      if (user && user.role === 'admin') {
        next();
      } else {
        res.status(403).json({ message: 'Forbidden' });
      }
    } catch (error) {
      console.error('Error checking admin privileges:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default new AdminService();