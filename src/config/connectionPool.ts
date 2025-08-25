/* Connection pool configuration */

export const CONNECTION_POOL_CONFIG = {
  max: 20, // Maximum number of connections
  min: 4, // Minimum number of connections
  idleTimeoutMillis: 30000, // Time in ms before an idle connection is closed
  connectionTimeoutMillis: 2000, // Time in ms to wait to establish a connection
  logErrors: true // Enable logging of connection errors
};