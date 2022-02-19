FROM node:14-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build --chown=nginx:nginx /usr/src/app/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

ADD configs/nginx.conf /etc/nginx/
ADD configs/default.conf /etc/nginx/conf.d/
COPY ./env-gen.sh .
RUN apk add --no-cache bash
RUN chmod +x env-gen.sh

CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env-gen.sh && nginx -g \"daemon off;\""]