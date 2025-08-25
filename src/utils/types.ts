export type User = {
  id: number;
  username: string;
  password_hash: string;
  email: string;
  created_at: Date;
};

export type Tool = {
  id: number;
  name: string;
  description: string;
  category: string;
  website_url: string;
  created_at: Date;
};

export type Review = {
  id: number;
  user_id: number;
  tool_id: number;
  rating: number;
  comment: string;
  created_at: Date;
};

export type Ranking = {
  id: number;
  tool_id: number;
  rank: number;
  calculated_at: Date;
};

export type Subscription = {
  id: number;
  email: string;
  subscribed_at: Date;
};