export interface User {
  id: number;
  username: string;
  password_hash: string;
  email: string;
  created_at: Date;
}

export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  website_url: string;
  created_at: Date;
}

export interface Review {
  id: number;
  user_id: number;
  tool_id: number;
  rating: number;
  comment: string;
  created_at: Date;
}

export interface Ranking {
  id: number;
  tool_id: number;
  rank: number;
  calculated_at: Date;
}

export interface Subscription {
  id: number;
  email: string;
  subscribed_at: Date;
}