FROM node:14

# install system deps
RUN npm i -g npm@7.5.2

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install root deps
COPY package*.json /usr/src/app/

# install dependencies
RUN npm i

# copy contennts
COPY . /usr/src/app

# build the things
RUN npm run codegen
RUN npm run dist

EXPOSE 3000
CMD [ "npm", "start" ]


