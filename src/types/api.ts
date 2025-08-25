/* API types */

/**
 * Represents the response format for paginated data.
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

/**
 * Represents a tool in the system.
 */
export interface Tool {
  id: number;
  name: string;
  description: string;
  category?: string;
  websiteUrl?: string;
  createdAt: Date;
}

/**
 * Parameters for filtering tools.
 */
export interface ToolFilterParams {
  category?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Parameters for tool submission.
 */
export interface ToolSubmission {
  name: string;
  description: string;
  category?: string;
  websiteUrl?: string;
}