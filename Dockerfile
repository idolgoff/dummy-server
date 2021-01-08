FROM node:12-alpine
COPY . /usr/app
WORKDIR /usr/app
RUN npm i
EXPOSE 3000
CMD ["node", "server.js"]