import schedule from 'node-schedule';
import { exec } from 'child_process';

class BackupService {
  constructor() {
    this.scheduleBackup();
  }

  scheduleBackup() {
    schedule.scheduleJob('0 0 * * *', () => {
      this.performBackup();
    });
  }

  performBackup() {
    const command = 'pg_dump -U postgres -d mydatabase > backup.sql';
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Error performing backup:', error);
        return;
      }
      console.log('Backup completed successfully:', stdout);
    });
  }
}

export default new BackupService();