# Use Node.js base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code into the container
COPY . .

# Expose the port that the Node.js app runs on
EXPOSE 3000

# Command to run the Node.js app
CMD ["node", "server.js"]