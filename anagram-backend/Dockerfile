FROM node:16.14.2
WORKDIR /app
COPY . .
RUN corepack enable
RUN corepack prepare yarn@3.3.1 --activate
CMD ["yarn", "run", "start"]
