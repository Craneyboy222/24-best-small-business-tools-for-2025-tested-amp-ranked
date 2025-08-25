import { exec } from 'child_process';

class BackupService {
  async backupDatabase(): Promise<void> {
    try {
      const backupCommand = `pg_dump ${process.env.DATABASE_URL} -f backup.sql`;
      exec(backupCommand, (error, stdout, stderr) => {
        if (error) {
          console.error('Backup error:', stderr);
          throw error;
        }
        console.log('Backup completed:', stdout);
      });
    } catch (err) {
      console.error('Backup service error:', err);
      throw err;
    }
  }
}

export default new BackupService();