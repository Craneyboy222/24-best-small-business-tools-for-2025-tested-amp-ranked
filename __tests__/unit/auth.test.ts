import { authenticateUser, registerUser } from '../services/auth';
import { jest } from '@jest/globals';

jest.test('../services/auth');

describe('Authentication Service', () => {
  it('should register a new user', async () => {
    const userData = { username: 'testuser', password: 'password123', email: 'testuser@example.com' };
    (registerUser as jest.test).testResolvedValue({ id: 1, ...userData });
    const result = await registerUser(userData);
    expect(result).toHaveProperty('id');
    expect(result.username).toBe(userData.username);
  });

  it('should authenticate a user', async () => {
    const credentials = { username: 'testuser', password: 'password123' };
    (authenticateUser as jest.test).testResolvedValue({ token: 'abcd.efgh.ijkl' });
    const result = await authenticateUser(credentials);
    expect(result).toHaveProperty('token');
  });
});