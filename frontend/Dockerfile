# Use Node.js version 20
FROM node:20-alpine AS build

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code into container
COPY . .

# Build React app
RUN npm run build

# Use nginx to serve static files
FROM nginx:alpine

# Copy build output from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run nginx
CMD ["nginx", "-g", "daemon off;"]