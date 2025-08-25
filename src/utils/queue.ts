import { Queue, Worker, Job } from 'bullmq';
import { redisConnection } from '../config/redis';

const queue = new Queue('task-queue', { connection: redisConnection });

export const addJob = async (name: string, data: any) => {
  try {
    await queue.add(name, data);
  } catch (error) {
    console.error('Error adding job to queue:', error);
    throw new Error('Queue add operation failed');
  }
};

export const processQueue = (name: string, processor: (job: Job) => Promise<void>) => {
  const worker = new Worker(name, processor, { connection: redisConnection });
  worker.on('completed', (job) => {
    console.log(`Job completed: ${job.id}`);
  });
  worker.on('failed', (job, err) => {
    console.error(`Job failed: ${job.id}, reason: ${err.message}`);
  });
};