FROM node:16-alpine
ENV NODE_ENV production

WORKDIR usr/src/app

COPY package.json .
COPY server.production.js .
COPY index.html .
COPY dist dist/

RUN npm install

CMD ["npm", "start"]

ENV PORT=7100
EXPOSE $PORT
