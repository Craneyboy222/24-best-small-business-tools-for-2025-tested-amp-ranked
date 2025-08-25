#!/bin/bash

# Setup script for the enterprise application

# Update package list and install dependencies
sudo apt update
sudo apt install -y nodejs npm postgresql postgresql-contrib

# Install PM2 for production process management
sudo npm install -g pm2

# Clone the repository
if [ -d "enterprise-app" ]; then
  echo "Directory 'enterprise-app' already exists. Pulling latest changes."
  cd enterprise-app
  git pull origin main
else
  git clone https://github.com/your-org/enterprise-app.git
  cd enterprise-app
fi

# Install npm dependencies
npm install

# Initialize the database
sudo service postgresql start
sudo -u postgres psql -c "CREATE DATABASE enterprise_db;"
sudo -u postgres psql -c "CREATE USER enterprise_user WITH PASSWORD 'securepassword';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE enterprise_db TO enterprise_user;"

# Run migrations and seed the database
./scripts/migrate.sh
./scripts/seed.sh

# Build the project
./scripts/build.sh

# Start the application using PM2
pm2 start ecosystem.config.js

# Setup complete
echo "Setup complete. Application is running."
