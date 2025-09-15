FROM node:20-alpine AS base
WORKDIR /usr/src/app
ARG REDIS_URL
ENV REDIS_URL=$REDIS_URL
RUN apk add --no-cache libc6-compat

FROM base as deps
COPY package.json pnpm-lock.yaml ./
RUN corepack enable
RUN pnpm install --frozen-lockfile --prod=false

FROM base as dev
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .