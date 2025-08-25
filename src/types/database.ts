/* Database types */

/**
 * Represents a record in the rankings table.
 */
export interface Ranking {
  id: number;
  toolId: number;
  rank: number;
  calculatedAt: Date;
}

/**
 * Represents a newsletter subscription.
 */
export interface Subscription {
  id: number;
  email: string;
  subscribedAt: Date;
}