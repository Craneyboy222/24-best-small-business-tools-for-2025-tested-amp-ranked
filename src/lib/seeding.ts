import { seedDatabase } from '../utils/seeding';

const seedData = [
  {
    table: 'users',
    rows: [
      { username: 'admin', password_hash: 'hashed_password', email: 'admin@example.com' },
      { username: 'user1', password_hash: 'hashed_password', email: 'user1@example.com' }
    ]
  },
  {
    table: 'tools',
    rows: [
      { name: 'Tool 1', description: 'Description of Tool 1', category: 'Category A', website_url: 'http://tool1.com' },
      { name: 'Tool 2', description: 'Description of Tool 2', category: 'Category B', website_url: 'http://tool2.com' }
    ]
  }
];

seedDatabase(seedData).catch(err => console.error('Seeding failed', err));