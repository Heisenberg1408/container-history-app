FROM node:16.17.1-alpine as client
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable-alpine as server
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=client /usr/src/app/dist /usr/share/nginx/html
