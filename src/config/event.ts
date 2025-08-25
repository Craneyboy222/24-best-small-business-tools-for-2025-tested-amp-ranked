/* Event configuration */

export const EVENT_CONFIG = {
  logging: {
    level: 'info', // Log level: 'error', 'warn', 'info', 'debug'
    destination: 'file', // Log destination: 'console', 'file', 'both'
    logFilePath: '/var/log/enterprise-app.log' // Path to log file
  },
  security: {
    enableCSRFProtection: true, // Cross-Site Request Forgery protection
    enableCSP: true, // Content Security Policy
    trustedDomains: ['https://trusted.com'] // List of trusted domains
  }
};