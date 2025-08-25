import { PrismaClient } from '@prisma/client';
import { Category } from '../types';
import { logError } from '../utils/logger';

const prisma = new PrismaClient();

export const createCategory = async (categoryData: Category): Promise<Category | null> => {
  try {
    const category = await prisma.categories.create({
      data: categoryData,
    });
    return category;
  } catch (error) {
    logError('Error creating category', error);
    return null;
  }
};