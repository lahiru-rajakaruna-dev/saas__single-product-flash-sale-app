FROM node:20-alpine3.22 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:lts-slim AS production
WORKDIR /app
COPY package.json package-lock.json ./
COPY --from=build /app /app

CMD ["npm","run","start"]