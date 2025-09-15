FROM node:20-alpine AS base
WORKDIR /usr/src/app
RUN apk add --no-cache libc6-compat

FROM base as deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base as dev
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .