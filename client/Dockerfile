FROM node:latest
WORKDIR /ui
COPY package.json /ui
RUN yarn install
COPY . .
CMD ["yarn","run", "start"]