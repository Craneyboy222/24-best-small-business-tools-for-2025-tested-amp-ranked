import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function seedDatabase() {
  try {
    await pool.query("INSERT INTO users (username, password_hash, email) VALUES ('admin', 'hashed_password', 'admin@example.com') ON CONFLICT DO NOTHING;");
    await pool.query("INSERT INTO tools (name, description, category, website_url) VALUES ('Example Tool', 'This is an example tool.', 'Category', 'https://example.com') ON CONFLICT DO NOTHING;");
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Seeding error:', error);
    throw error;
  }
}

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});

seedDatabase().finally(() => pool.end());