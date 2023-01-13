FROM nginx:1.13.3-alpine AS base
COPY nginx/default.conf /etc/nginx/conf.d/
EXPOSE 80

FROM node:14.17.1-stretch AS build
WORKDIR /app

ARG NODE_ENV
RUN echo ${NODE_ENV}

COPY . .
COPY ./env/${NODE_ENV}.env .env


RUN yarn
RUN yarn build


FROM build AS publish
RUN mv /app/build/ /build

FROM base AS final
RUN apk add --no-cache tzdata
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN rm -rf /usr/share/nginx/html/*
COPY --from=publish /build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]