/* Error types */

/**
 * Represents an API error.
 */
export class ApiError extends Error {
  public readonly code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

/**
 * Represents an authentication error.
 */
export class AuthenticationError extends ApiError {
  constructor(message: string = 'Authentication failed') {
    super(message, 401);
  }
}

/**
 * Represents an authorization error.
 */
export class AuthorizationError extends ApiError {
  constructor(message: string = 'Access denied') {
    super(message, 403);
  }
}