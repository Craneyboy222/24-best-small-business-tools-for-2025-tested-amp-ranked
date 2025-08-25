import { exec } from 'child_process';

export function backupDatabase() {
  const backupCommand = `pg_dump ${process.env.DATABASE_URL} > backup.sql`;

  exec(backupCommand, (error, stdout, stderr) => {
    if (error) {
      console.error('Backup error:', error);
      return;
    }
    if (stderr) {
      console.error('Backup stderr:', stderr);
      return;
    }
    console.log('Database backup successful:', stdout);
  });
}