import { PrismaClient } from '@prisma/client';
import { Review } from '../types';
import { logError } from '../utils/logger';

const prisma = new PrismaClient();

export const createReview = async (reviewData: Review): Promise<Review | null> => {
  try {
    const review = await prisma.reviews.create({
      data: reviewData,
    });
    return review;
  } catch (error) {
    logError('Error creating review', error);
    return null;
  }
};