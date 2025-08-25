import { Request, Response, NextFunction } from 'express';

interface User {
  id: number;
  role: string;
  permissions: string[];
}

const rolesPermissions = {
  admin: ['manage_tools', 'view_users', 'manage_users', 'view_analytics'],
  user: ['submit_tools', 'view_tools', 'submit_reviews'],
  guest: ['view_tools'],
};

const rbacMiddleware = (requiredPermissions: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userPermissions = rolesPermissions[user.role] || [];
    const hasPermission = requiredPermissions.every(permission => userPermissions.includes(permission));

    if (!hasPermission) {
      return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }

    next();
  };
};

export default rbacMiddleware;