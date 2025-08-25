import { Pool } from 'pg';

const pool = new Pool({
  max: 20, // Increase pool size
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
});

export const query = (text: string, params: any[]) => pool.query(text, params);

export const optimizeQueries = () => {
  // Add indices for frequently queried fields
  pool.query('CREATE INDEX IF NOT EXISTS idx_tools_name ON tools(name);');
  pool.query('CREATE INDEX IF NOT EXISTS idx_reviews_tool_id ON reviews(tool_id);');
};

export default pool;