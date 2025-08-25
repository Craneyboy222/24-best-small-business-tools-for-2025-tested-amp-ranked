import { Pool } from 'pg';
import { Review } from '../models/Review';
import { BaseRepository } from './BaseRepository';

export class ReviewRepository extends BaseRepository<Review> {
  constructor(pool: Pool) {
    super(pool, 'reviews');
  }

  async findByToolId(toolId: number): Promise<Review[]> {
    try {
      const result = await this.pool.query('SELECT * FROM reviews WHERE tool_id = $1', [toolId]);
      return result.rows;
    } catch (error) {
      console.error('Error finding reviews by tool ID:', error);
      throw new Error('Database query error');
    }
  }
}
