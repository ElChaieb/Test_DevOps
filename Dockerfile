# Base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose port 3000
EXPOSE 3000

# Start app
CMD ["npm", "start"]
