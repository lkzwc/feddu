FROM node:gallium-slim

WORKDIR /code-server

ADD . /code-server

RUN npm install

EXPOSE 3000

CMD npm run serve
