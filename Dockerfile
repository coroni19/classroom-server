FROM node:22-alpine

WORKDIR users/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

RUN npm install pg --save --legacy-peer-deps

COPY . . 

RUN npm run build

USER node

CMD ["npm", "run", "start:prod"]