import { Pool } from 'pg';
import { Notification } from '../models/Notification';
import { BaseRepository } from './BaseRepository';

export class NotificationRepository extends BaseRepository<Notification> {
  constructor(pool: Pool) {
    super(pool, 'notifications');
  }

  async findByUserId(userId: number): Promise<Notification[]> {
    try {
      const result = await this.pool.query('SELECT * FROM notifications WHERE user_id = $1', [userId]);
      return result.rows;
    } catch (error) {
      console.error('Error finding notifications by user ID:', error);
      throw new Error('Database query error');
    }
  }
}
