import { Pool } from 'pg';

export abstract class BaseRepository<T> {
  protected pool: Pool;
  private tableName: string;

  constructor(pool: Pool, tableName: string) {
    this.pool = pool;
    this.tableName = tableName;
  }

  async findAll(): Promise<T[]> {
    try {
      const result = await this.pool.query(`SELECT * FROM ${this.tableName}`);
      return result.rows;
    } catch (error) {
      console.error(`Error retrieving all records from ${this.tableName}:`, error);
      throw new Error('Database query error');
    }
  }

  async findById(id: number): Promise<T | null> {
    try {
      const result = await this.pool.query(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);
      return result.rows[0] || null;
    } catch (error) {
      console.error(`Error finding record by ID in ${this.tableName}:`, error);
      throw new Error('Database query error');
    }
  }

  async create(item: Partial<T>): Promise<T> {
    // Implement generic create logic, assuming item is mapped correctly to table columns.
    throw new Error('Create method not implemented');
  }

  async update(id: number, item: Partial<T>): Promise<void> {
    // Implement generic update logic, assuming item is mapped correctly to table columns.
    throw new Error('Update method not implemented');
  }

  async delete(id: number): Promise<void> {
    try {
      await this.pool.query(`DELETE FROM ${this.tableName} WHERE id = $1`, [id]);
    } catch (error) {
      console.error(`Error deleting record in ${this.tableName}:`, error);
      throw new Error('Database query error');
    }
  }
}
