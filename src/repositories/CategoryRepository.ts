import { Pool } from 'pg';
import { Category } from '../models/Category';
import { BaseRepository } from './BaseRepository';

export class CategoryRepository extends BaseRepository<Category> {
  constructor(pool: Pool) {
    super(pool, 'categories');
  }

  async getAllCategories(): Promise<Category[]> {
    try {
      const result = await this.pool.query('SELECT * FROM categories');
      return result.rows;
    } catch (error) {
      console.error('Error retrieving all categories:', error);
      throw new Error('Database query error');
    }
  }
}
