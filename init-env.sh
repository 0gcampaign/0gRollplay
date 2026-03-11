#!/bin/sh

# Ensure .env exists
if [ ! -f .env ]; then
  cp .env.example .env
fi

# If JWT_SECRET_KEY is not in .env, generate and append it
if ! grep -q "JWT_SECRET_KEY" .env; then
  echo "Generating dynamic JWT_SECRET_KEY..."
  RANDOM_SECRET=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
  echo "JWT_SECRET_KEY=$RANDOM_SECRET" >> .env
fi

# Execute the main command
exec "$@"
