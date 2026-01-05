# ---------- Build stage ----------
FROM node:20-alpine AS build
WORKDIR /app
ARG VITE_GAME_GALLERY_URL

# Copy package files first for caching dependencies
COPY package*.json ./
# Install dependencies
RUN npm ci

# Copy source and config files
COPY . .

# Build the app for production (use Vite directly to avoid type-check-only failures)
RUN npm run build

# ---------- Production stage ----------
FROM nginx:alpine

# Copy build output to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config (kept out of project root)
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
