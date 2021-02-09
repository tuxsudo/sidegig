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

# install web deps
RUN mkdir -p /usr/src/app/packages/web
COPY packages/web/package*.json /usr/src/app/packages/web/

# install models deps
RUN mkdir -p /usr/src/app/packages/sidegig-models
COPY packages/sidegig-models/package*.json /usr/src/app/packages/sidegig-models/

RUN lerna bootstrap

COPY packages/web /usr/src/app/packages/web
COPY packages/sidegig-models /usr/src/app/packages/sidegig-models

# build the things
RUN lerna run --stream codegen
RUN lerna run --stream dist


