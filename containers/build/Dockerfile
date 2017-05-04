FROM node:6.2-wheezy

WORKDIR /project

COPY ./package.json package.json
COPY ./typings.json typings.json

COPY ./provision.sh /tmp/provision.sh
RUN chmod +x /tmp/provision.sh
RUN /tmp/provision.sh

COPY ./tslint.json tslint.json
COPY ./tsconfig.json tsconfig.json
COPY ./gulpfile.js gulpfile.js
COPY ./webpack.config.js webpack.config.js

CMD ./node_modules/.bin/gulp watch
