import { Pool } from 'pg';
import { logError } from './logging';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432
});

const query = async (text: string, params: any[] = []) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res.rows;
  } catch (error) {
    logError('Database query error', error);
    throw error;
  } finally {
    client.release();
  }
};

const transaction = async (callback: (client: any) => Promise<void>) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await callback(client);
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    logError('Transaction error', error);
    throw error;
  } finally {
    client.release();
  }
};

export { query, transaction };