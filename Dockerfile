FROM node:16-alpine
ENV NODE_ENV production

WORKDIR usr/src/app

COPY package.json .
COPY package-lock.json .
COPY server.production.js .
COPY index.html .
COPY dist dist/

RUN npm ci --ignore-scripts

CMD ["npm", "start"]

ENV PORT=7100
EXPOSE $PORT
