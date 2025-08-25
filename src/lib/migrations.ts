import fs from 'fs';
import path from 'path';

export const getMigrationFiles = (): string[] => {
  const migrationsPath = path.join(__dirname, '../migrations');
  return fs.readdirSync(migrationsPath);
};

export const readMigrationFile = (fileName: string): string => {
  const migrationsPath = path.join(__dirname, '../migrations', fileName);
  return fs.readFileSync(migrationsPath, 'utf8');
};