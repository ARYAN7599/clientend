FROM node:16.19.0-alpine
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install -g npm@9.2.0
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
