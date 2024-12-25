#Stage 1
FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production


#Stage 2
FROM nginx:latest

COPY --from=build /app/dist/devopsapp/browser /usr/share/nginx/html


EXPOSE 80