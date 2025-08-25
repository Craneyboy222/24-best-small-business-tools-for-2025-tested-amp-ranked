import { Pool } from 'pg';
import { Tool } from '../models/Tool';
import { BaseRepository } from './BaseRepository';

export class ProductRepository extends BaseRepository<Tool> {
  constructor(pool: Pool) {
    super(pool, 'tools');
  }

  async findByCategory(category: string): Promise<Tool[]> {
    try {
      const result = await this.pool.query('SELECT * FROM tools WHERE category = $1', [category]);
      return result.rows;
    } catch (error) {
      console.error('Error finding tools by category:', error);
      throw new Error('Database query error');
    }
  }
}
