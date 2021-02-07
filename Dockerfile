FROM node:14

ARG PORT=80
EXPOSE ${PORT}

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install web dependencies
COPY package*.json lerna.json /usr/src/app/

# Add docker image
RUN mkdir -p /usr/src/app/packages/web
COPY packages/web/package*.json /usr/src/app/packages/web/

RUN npm i -g npm@7.5.2 lerna
RUN lerna bootstrap

COPY packages/web /usr/src/app/packages/web


RUN lerna run --scope @tuxsudo/sidegig-web --stream build


