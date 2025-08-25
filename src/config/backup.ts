/* Backup configuration */

export const BACKUP_CONFIG = {
  frequency: 'daily', // Options: 'hourly', 'daily', 'weekly'
  retentionDays: 30, // Number of days to retain backups
  storageProvider: 'AWS_S3', // Backup storage provider
  aws: {
    region: 'us-west-2',
    bucketName: 'enterprise-app-backups',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  encryption: true // Enable backup encryption
};