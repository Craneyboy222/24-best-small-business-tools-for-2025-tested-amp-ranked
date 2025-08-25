import { Pool } from 'pg';

class ConnectionPoolService {
  private static instance: Pool;

  private constructor() {}

  static getInstance(): Pool {
    if (!ConnectionPoolService.instance) {
      ConnectionPoolService.instance = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
      });
    }
    return ConnectionPoolService.instance;
  }
}

export default ConnectionPoolService;