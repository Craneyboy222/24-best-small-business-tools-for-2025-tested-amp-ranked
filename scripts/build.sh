#!/bin/bash

# Build script for the enterprise application

# Build backend
npm run build:backend

# Build frontend
npm run build:frontend

echo "Build complete."
