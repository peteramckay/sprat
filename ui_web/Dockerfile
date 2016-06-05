# Sprat
# Copyright (c) 2016 Peter McKay
# Free to use under the MIT license

FROM node
MAINTAINER Peter McKay <peteramckay@gmail.com>

EXPOSE 8080
RUN apt-get update
RUN npm install express

# Leaving this here but turned off for now, in case we need database features later...
# RUN sudo npm install mongoskin

#copy custom assets into the container...
ADD /ui_assets/ .  
ADD ui_web.js .
RUN node ui_web.js
