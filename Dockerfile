FROM node:12

WORKDIR /src

COPY package*.json /src/

RUN npm install

COPY ./src /src

CMD ["npm", "start"]
