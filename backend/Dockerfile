# Dockerfile for backend
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5050
CMD ["node", "server.js"]
