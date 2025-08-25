#!/bin/bash

# Deployment script for the enterprise application

# Pull latest changes from the main branch
git pull origin main

# Install npm dependencies
npm install

# Run migrations
./scripts/migrate.sh

# Build the project
./scripts/build.sh

# Restart the application using PM2
pm2 restart ecosystem.config.js

echo "Deployment complete. Application is up-to-date."
