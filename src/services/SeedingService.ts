import DatabaseService from './DatabaseService';

class SeedingService {
  async seed(): Promise<void> {
    try {
      await DatabaseService.query('INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3)', ['admin', 'hashedpassword', 'admin@example.com']);
      console.log('Seeding completed.');
    } catch (err) {
      console.error('Seeding error:', err);
      throw err;
    }
  }
}

export default new SeedingService();