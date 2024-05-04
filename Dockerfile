# Use a newer version of Node.js
FROM node:16 AS build-stage
WORKDIR /app
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Use the same newer Node.js version for production
FROM node:16 AS production-stage
WORKDIR /app
COPY --from=build-stage /app/frontend/build /app/public
COPY backend/package*.json ./backend/
RUN cd backend && npm install
COPY backend/ ./backend/
EXPOSE 3000
CMD ["node", "backend/server.js"]
