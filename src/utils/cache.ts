import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

export const setCache = (key: string, value: any, ttl?: number) => {
  try {
    cache.set(key, value, ttl);
  } catch (error) {
    console.error('Error setting cache:', error);
    throw new Error('Cache set operation failed');
  }
};

export const getCache = (key: string) => {
  try {
    return cache.get(key);
  } catch (error) {
    console.error('Error getting cache:', error);
    return null;
  }
};

export const delCache = (key: string) => {
  try {
    cache.del(key);
  } catch (error) {
    console.error('Error deleting cache:', error);
    throw new Error('Cache delete operation failed');
  }
};