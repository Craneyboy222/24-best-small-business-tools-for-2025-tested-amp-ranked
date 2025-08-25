module.exports = {
  reactStrictMode: true,
  // Prefer runtime environment variables; avoid hard-failing when missing during build.
  env: {
    API_URL: process.env.API_URL || '',
    JWT_SECRET: process.env.JWT_SECRET || ''
  },
  experimental: {
    appDir: false
  }
};