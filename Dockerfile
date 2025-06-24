# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy backend code only
COPY backend/ /app

# Install dependencies
RUN npm install

# Expose backend port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
