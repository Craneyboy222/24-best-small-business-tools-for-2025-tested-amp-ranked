import request from 'supertest';
import app from '../../app';

describe('User Integration Test', () => {
  it('should retrieve the authenticated user profile', async () => {
    const loginRes = await request(app).post('/api/users/login').send({ username: 'testuser', password: 'password123' });
    const res = await request(app).get('/api/users/profile').set('Authorization', `Bearer ${loginRes.body.token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('username', 'testuser');
  });
});