import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function runMigrations() {
  try {
    const migrationsPath = path.join(__dirname, '../../migrations');
    const migrationFiles = fs.readdirSync(migrationsPath);

    for (const file of migrationFiles) {
      const sql = fs.readFileSync(path.join(migrationsPath, file), 'utf-8');
      await pool.query(sql);
      console.log(`Successfully applied migration: ${file}`);
    }
  } catch (error) {
    console.error('Migration error:', error);
    throw error;
  }
}

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});

runMigrations().finally(() => pool.end());