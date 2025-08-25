import request from 'supertest';
import app from '../../app';

describe('Authentication Integration Test', () => {
  it('should register and login a user', async () => {
    const userData = { username: 'testuser', password: 'password123', email: 'testuser@example.com' };
    await request(app).post('/api/users/register').send(userData).expect(201);
    const res = await request(app).post('/api/users/login').send(userData);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});