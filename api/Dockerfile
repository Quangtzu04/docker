FROM node:latest
WORKDIR /server
COPY package.json /server
RUN npm install
RUN npm audit fix --force
COPY . /server
CMD node index.js
EXPOSE 5000
