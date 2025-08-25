/* TypeScript types */

export type User = {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
};

export type Tool = {
  id: number;
  name: string;
  description: string;
  category: string;
  websiteUrl: string;
  createdAt: Date;
};

export type Review = {
  id: number;
  userId: number;
  toolId: number;
  rating: number;
  comment: string;
  createdAt: Date;
};

export type Subscription = {
  id: number;
  email: string;
  subscribedAt: Date;
};