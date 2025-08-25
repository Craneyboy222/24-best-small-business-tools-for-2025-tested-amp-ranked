import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export function getConnectionPool() {
  return pool;
}

process.on('exit', () => {
  pool.end().then(() => console.log('Pool has ended'));
});

export default pool;