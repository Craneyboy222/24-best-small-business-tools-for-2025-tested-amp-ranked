/* Validation types */

/**
 * Represents validation errors for form fields.
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Response format for validation errors.
 */
export interface ValidationErrorResponse {
  errors: ValidationError[];
}