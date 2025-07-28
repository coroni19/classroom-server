FROM node:22-alpine

WORKDIR users/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

RUN npm install pg --save --legacy-peer-deps

COPY . . 

CMD ["npm", "run", "dev"]