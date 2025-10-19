# Multi-stage Dockerfile for Next.js app

# ---------- Base deps ----------
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# ---------- Dev image (for docker-compose dev) ----------
FROM base AS dev
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---------- Builder (prod) ----------
FROM base AS builder
RUN npm ci
COPY . .
RUN npm run build

# ---------- Runtime (prod) ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Only copy necessary files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
