FROM node:alpine

CMD ["mkdir", "/usr/app"]

WORKDIR /usr/app

COPY package.json .
RUN yarn
COPY . .

CMD ["yarn", "start"]