/* Common types */

/**
 * Represents a generic error response.
 */
export interface ErrorResponse {
  message: string;
  code?: number;
}

/**
 * Represents a successful operation response.
 */
export interface SuccessResponse {
  message: string;
  data?: any;
}

/**
 * Represents a rating value.
 */
export type Rating = 1 | 2 | 3 | 4 | 5;