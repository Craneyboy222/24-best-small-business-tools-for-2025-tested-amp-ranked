import Redis from 'ioredis';

class CacheService {
  private client: Redis.Redis;

  constructor() {
    this.client = new Redis();
  }

  async set(key: string, value: any, expireTime: number) {
    try {
      await this.client.set(key, JSON.stringify(value), 'EX', expireTime);
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  }

  async get(key: string) {
    try {
      const data = await this.client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting cache:', error);
      return null;
    }
  }
}

export default new CacheService();