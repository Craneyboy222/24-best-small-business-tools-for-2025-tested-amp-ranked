import { getUserProfile } from '../services/user';
import { jest } from '@jest/globals';

jest.test('../services/user');

describe('User Service', () => {
  it('should retrieve user profile', async () => {
    const userId = 1;
    const profileData = { id: userId, username: 'testuser', email: 'testuser@example.com' };
    (getUserProfile as jest.test).testResolvedValue(profileData);
    const result = await getUserProfile(userId);
    expect(result).toEqual(profileData);
  });
});