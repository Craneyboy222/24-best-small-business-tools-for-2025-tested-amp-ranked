import request from 'supertest';
import app from '../app';

describe('API Endpoints', () => {
  it('should fetch the list of tools', async () => {
    const res = await request(app).get('/api/tools');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('tools');
  });
});