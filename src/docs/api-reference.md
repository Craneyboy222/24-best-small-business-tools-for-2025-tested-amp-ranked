# API Reference

## Overview
This document serves as a reference for all API endpoints, request and response formats, and authentication details.

## Authentication
- **Method**: JSON Web Tokens (JWT)
- **Header**: Authorization: Bearer `<token>`

## Error Handling
- **400 Bad Request**: Invalid request data.
- **401 Unauthorized**: Authentication failure.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: General server error.

## Logging
All API requests and errors are logged for auditing and troubleshooting purposes.

## Endpoints

### Tool Endpoints
- **GET /api/tools**: Retrieve a list of tools. Supports filtering and pagination.
- **POST /api/tools**: Submit a new tool for review.
- **GET /api/tools/:id**: Retrieve detailed information about a specific tool.

### Review Endpoints
- **POST /api/reviews**: Submit a review for a tool.
- **GET /api/reviews/:toolId**: Retrieve reviews for a specific tool.

### Ranking Endpoints
- **GET /api/rankings**: Retrieve the current rankings of tools.

### User Endpoints
- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Authenticate a user and return a token.
- **GET /api/users/profile**: Retrieve the authenticated user's profile.

### Subscription Endpoint
- **POST /api/subscriptions**: Subscribe an email to the newsletter.

## Rate Limiting
To ensure fair usage, the API implements rate limiting. Please refer to the rate limit headers in responses for details.

## Best Practices
- Utilize HTTPS for secure communication.
- Use strong passwords and keep authentication tokens confidential.
- Handle errors gracefully in your application and provide informative messages to users.
