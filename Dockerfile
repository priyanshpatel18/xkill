FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY prisma ./prisma

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev:docker" ]