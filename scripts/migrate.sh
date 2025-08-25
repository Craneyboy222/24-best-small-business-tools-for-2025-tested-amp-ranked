#!/bin/bash

# Database migration script

# Apply migrations to the PostgreSQL database

# Ensure the database server is running
sudo service postgresql start

# Run migrations using a migration tool, e.g., Knex.js
npx knex migrate:latest --env production

echo "Database migrations applied successfully."
