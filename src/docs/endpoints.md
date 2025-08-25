# API Endpoints Documentation

## Overview
This document provides a detailed description of the API endpoints available for the enterprise application.

## Endpoints

### GET /api/tools
- **Description**: Retrieves a list of tools with optional filters and pagination.
- **Query Parameters**:
  - `filter`: (optional) Filter tools by category.
  - `page`: (optional) Page number for pagination.
- **Responses**:
  - `200 OK`: Returns a list of tools.
  - `500 Internal Server Error`: Indicates a server error.

### POST /api/tools
- **Description**: Submits a new tool for review.
- **Request Body**: Tool object containing `name`, `description`, `category`, `website_url`.
- **Responses**:
  - `201 Created`: Tool submitted successfully.
  - `400 Bad Request`: Invalid tool data.

### GET /api/tools/:id
- **Description**: Retrieves detailed information about a specific tool.
- **Path Parameters**:
  - `id`: Tool ID.
- **Responses**:
  - `200 OK`: Returns tool details.
  - `404 Not Found`: Tool not found.

### POST /api/reviews
- **Description**: Submits a review for a tool.
- **Request Body**: Review object containing `user_id`, `tool_id`, `rating`, `comment`.
- **Responses**:
  - `201 Created`: Review submitted successfully.
  - `400 Bad Request`: Invalid review data.

### GET /api/reviews/:toolId
- **Description**: Retrieves reviews for a specific tool.
- **Path Parameters**:
  - `toolId`: Tool ID.
- **Responses**:
  - `200 OK`: Returns list of reviews.

### GET /api/rankings
- **Description**: Retrieves the current rankings of tools.
- **Responses**:
  - `200 OK`: Returns tool rankings.

### POST /api/users/register
- **Description**: Registers a new user.
- **Request Body**: User object containing `username`, `password`, `email`.
- **Responses**:
  - `201 Created`: User registered successfully.
  - `400 Bad Request`: Invalid user data.

### POST /api/users/login
- **Description**: Authenticates a user and returns a token.
- **Request Body**: Login object containing `username`, `password`.
- **Responses**:
  - `200 OK`: Returns authentication token.
  - `401 Unauthorized`: Invalid credentials.

### GET /api/users/profile
- **Description**: Retrieves the authenticated user's profile.
- **Responses**:
  - `200 OK`: Returns user profile.
  - `401 Unauthorized`: User not authenticated.

### POST /api/subscriptions
- **Description**: Subscribes an email to the newsletter.
- **Request Body**: Subscription object containing `email`.
- **Responses**:
  - `201 Created`: Email subscribed successfully.
  - `400 Bad Request`: Invalid email format.
