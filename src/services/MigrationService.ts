import { Client } from 'pg';
import fs from 'fs';
import path from 'path';

class MigrationService {
  private client: Client;

  constructor() {
    this.client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });
  }

  async runMigrations(): Promise<void> {
    await this.client.connect();
    try {
      const migrationsPath = path.join(__dirname, '../migrations');
      const migrationFiles = fs.readdirSync(migrationsPath);
      for (const file of migrationFiles) {
        const sql = fs.readFileSync(path.join(migrationsPath, file)).toString();
        await this.client.query(sql);
        console.log(`Migration ${file} applied.`);
      }
    } catch (err) {
      console.error('Migration error:', err);
      throw err;
    } finally {
      await this.client.end();
    }
  }
}

export default new MigrationService();