FROM nginx:alpine

LABEL testcontainer "Miguel Vacas"

COPY ./app/ /usr/share/nginx/html

EXPOSE 80
