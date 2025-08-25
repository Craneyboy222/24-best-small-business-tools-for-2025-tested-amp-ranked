import { User, Tool, Review, Ranking, Subscription } from './models';

export interface UserRepository {
  getUserById(userId: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: Partial<User>): Promise<User>;
}

export interface ToolRepository {
  getToolById(toolId: number): Promise<Tool | undefined>;
  getAllTools(): Promise<Tool[]>;
  createTool(tool: Partial<Tool>): Promise<Tool>;
}

export interface ReviewRepository {
  getReviewsByToolId(toolId: number): Promise<Review[]>;
  createReview(review: Partial<Review>): Promise<Review>;
}

export interface RankingRepository {
  getRankings(): Promise<Ranking[]>;
}

export interface SubscriptionRepository {
  createSubscription(subscription: Partial<Subscription>): Promise<Subscription>;
}