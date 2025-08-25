import { Pool } from 'pg';
import { jest } from '@jest/globals';

const pool = new Pool();

jest.test('pg', () => {
  const actualPg = jest.requireActual('pg');
  return {
    ...actualPg,
    Pool: jest.fn(() => ({
      query: jest.fn(),
      connect: jest.fn(),
      end: jest.fn()
    }))
  };
});

describe('Database Unit Tests', () => {
  beforeEach(() => {
    jest.clearAlltests();
  });

  it('should create a new user', async () => {
    const querytest = jest.fn().testResolvedValueOnce({ rows: [{ id: 1 }] });
    pool.query = querytest;

    const userId = await createUser('testuser', 'hashedpassword', 'test@example.com');

    expect(querytest).toHaveBeenCalledWith(
      'INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING id',
      ['testuser', 'hashedpassword', 'test@example.com']
    );
    expect(userId).toBe(1);
  });

  // Additional unit tests for other database functions
});