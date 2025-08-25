import Redis from 'ioredis';

const redis = new Redis();

export const cacheToolData = async (key: string, data: any, duration: number) => {
  await redis.set(key, JSON.stringify(data), 'EX', duration);
};

export const getToolDataFromCache = async (key: string) => {
  const cachedData = await redis.get(key);
  return cachedData ? JSON.parse(cachedData) : null;
};

export default redis;