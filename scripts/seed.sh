#!/bin/bash

# Database seeding script

# Seed the PostgreSQL database with initial data

# Ensure the database server is running
sudo service postgresql start

# Run seeds using a seeding tool, e.g., Knex.js
npx knex seed:run --env production

echo "Database seeded with initial data successfully."
