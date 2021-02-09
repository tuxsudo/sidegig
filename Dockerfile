FROM node:14

ARG PORT=80
EXPOSE ${PORT}

# install system deps
RUN npm i -g npm@7.5.2 lerna

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install root deps
COPY package*.json lerna.json /usr/src/app/

# prepare web
RUN mkdir -p /usr/src/app/web
COPY web/package*.json /usr/src/app/web/

# prepare logger module
RUN mkdir -p /usr/src/app/modules/sidegig-logger
COPY modules/sidegig-logger/package*.json /usr/src/app/modules/sidegig-logger/

# install dependencies
RUN lerna bootstrap

# copy contennts
COPY web /usr/src/app/web
COPY modules/sidegig-logger /usr/src/app/modules/sidegig-logger

# build the things
RUN lerna run --stream codegen
RUN lerna run --stream dist


