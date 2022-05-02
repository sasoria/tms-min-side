FROM node:16-alpine
ENV NODE_ENV production

WORKDIR usr/src/app
COPY server server/
COPY dist dist/

RUN npm ci --ignore-scripts

WORKDIR server
RUN npm install

CMD ["node", "./server.js"]

ENV PORT=3000
EXPOSE $PORT
