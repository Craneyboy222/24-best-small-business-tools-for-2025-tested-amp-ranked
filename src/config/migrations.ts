import path from 'path';

export const migrationsConfig = {
  directory: path.join(__dirname, '..', 'migrations'),
  tableName: 'knex_migrations',
  extension: 'ts'
};