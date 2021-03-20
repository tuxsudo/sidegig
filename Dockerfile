FROM node:14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install root deps
COPY package.json yarn.lock /usr/src/app/

# install dependencies
RUN yarn

# copy contennts
COPY . /usr/src/app

# build the things
RUN yarn codegen
RUN yarn dist

EXPOSE 3000
CMD [ "yarn", "start" ]


