import { Pool } from 'pg';
import { AuditLog } from '../models/AuditLog';
import { BaseRepository } from './BaseRepository';

export class AuditLogRepository extends BaseRepository<AuditLog> {
  constructor(pool: Pool) {
    super(pool, 'audit_logs');
  }

  async logAction(action: string, userId: number): Promise<void> {
    try {
      await this.pool.query('INSERT INTO audit_logs (action, user_id) VALUES ($1, $2)', [action, userId]);
    } catch (error) {
      console.error('Error logging action:', error);
      throw new Error('Database query error');
    }
  }
}
