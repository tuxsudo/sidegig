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
RUN mkdir -p /usr/src/app/packages/web
COPY packages/web/package*.json /usr/src/app/packages/web/

# prepare logger module
RUN mkdir -p /usr/src/app/packages/sidegig-logger
COPY packages/sidegig-logger/package*.json /usr/src/app/packages/sidegig-logger/

# install dependencies
RUN lerna bootstrap

# copy contennts
COPY packages/web /usr/src/app/packages/web
COPY packages/sidegig-logger /usr/src/app/packages/sidegig-logger

# build the things
RUN lerna run --stream codegen
RUN lerna run --stream dist


