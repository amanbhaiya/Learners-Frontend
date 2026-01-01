FROM node:21.7-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

CMD [ "npm", "run", "dev" ]