# Stage 1: Build the application
FROM node:18-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Install dependencies using pnpm
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install

# Copy all files to the container
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Create the final image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "./build/index.js"]