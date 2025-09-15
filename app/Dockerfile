FROM node:20-alpine AS base
WORKDIR /usr/src/app

FROM base as deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base as dev
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .