# Sprat
# Copyright (c) 2016 Peter McKay
# Free to use under the MIT license

FROM node:argon
MAINTAINER Peter McKay <peteramckay@gmail.com>

# Create app directory
RUN mkdir -p /usr/src/sprat_ui_web
WORKDIR /usr/src/sprat_ui_web

# Install app dependencies
COPY package.json /usr/src/sprat_ui_web/
RUN npm install

# Bundle app source
COPY . /usr/src/sprat_ui_web

EXPOSE 8080

CMD [ "npm", "start" ]
