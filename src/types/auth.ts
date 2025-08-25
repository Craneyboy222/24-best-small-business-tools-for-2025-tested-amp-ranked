/* Authentication types */

/**
 * Represents the payload of a JWT token.
 */
export interface JWTPayload {
  userId: number;
  username: string;
  email: string;
  iat: number; // Issued at
  exp: number; // Expiration time
}

/**
 * Represents the response from the login endpoint.
 */
export interface LoginResponse {
  token: string;
  user: User;
}

/**
 * Represents the data required for user registration.
 */
export interface RegisterData {
  username: string;
  password: string;
  email: string;
}