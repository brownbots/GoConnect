# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only backend code
COPY backend/ ./backend/

# Set working directory to backend
WORKDIR /app/backend

# Install dependencies
RUN npm install

# Expose the backend port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
