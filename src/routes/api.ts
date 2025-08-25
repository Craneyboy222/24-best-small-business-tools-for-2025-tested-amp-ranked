import express from 'express';
export const api = express.Router();
api.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});
api.get('/info', (_req, res) => {
  res.json({ name: "24 Best Small Business Tools for 2025 – Tested &amp; Ranked", description: "Modern 24 Best Small Business Tools for 2025 – Tested &amp; Ranked app with enterprise quality.", quality: 'enterprise' });
});
export default api;
