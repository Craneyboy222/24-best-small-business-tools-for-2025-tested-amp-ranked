/* User types */

/**
 * Represents a user in the system.
 */
export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
}

/**
 * Represents a user's profile including saved tools and reviews.
 */
export interface UserProfile extends User {
  savedTools: number[]; // Array of saved tool IDs
  reviews: Review[];
}

/**
 * Represents a review made by a user for a tool.
 */
export interface Review {
  id: number;
  userId: number;
  toolId: number;
  rating: number; // 1 to 5
  comment: string;
  createdAt: Date;
}