FROM node:14-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install -g npm@9.2.0
RUN npm install -g react-scripts
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
