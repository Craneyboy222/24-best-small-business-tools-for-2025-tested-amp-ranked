import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Analytics } from '../entities/Analytics';

class AnalyticsService {
  async trackEvent(eventType: string, metadata: any) {
    try {
      const analyticsRepository = getRepository(Analytics);
      const event = analyticsRepository.create({ eventType, metadata });
      await analyticsRepository.save(event);
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }

  async getAnalyticsData(req: Request, res: Response) {
    try {
      const analyticsRepository = getRepository(Analytics);
      const data = await analyticsRepository.find();
      res.json(data);
    } catch (error) {
      console.error('Error retrieving analytics data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default new AnalyticsService();