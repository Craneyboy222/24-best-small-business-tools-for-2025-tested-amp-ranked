#!/bin/bash

# Test script for the enterprise application

# Run backend tests
npm run test:backend

# Run frontend tests
npm run test:frontend

# Run end-to-end tests
npm run test:e2e

echo "All tests completed."
