# build stage
FROM node:16.14.2 as build-stage
WORKDIR /app
COPY . .
RUN corepack enable
RUN corepack prepare yarn@3.3.1 --activate
RUN yarn run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
