import request from 'supertest';
import app from '../../src/app';
import { pool } from '../../src/db';

beforeAll(async () => {
  await pool.connect();
});

afterAll(async () => {
  await pool.end();
});

describe('Database Integration Tests', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/users/register')
      .send({ username: 'testuser', password: 'password123', email: 'test@example.com' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');
  });

  // Additional integration tests for other endpoints
});