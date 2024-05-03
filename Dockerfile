# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Install http-server globally and build the application
RUN npm i -g http-server && npm run build

# Change working directory to the build directory
WORKDIR /usr/src/app/build

# Expose port 80 for HTTP and port 443 for HTTPS
EXPOSE 80

# Start the application
CMD [ "http-server", "-p", "80" ]