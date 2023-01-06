FROM node:16.19.0-alpine
WORKDIR app
COPY . .
RUN npm install -g npm@9.2.0
EXPOSE 3000
CMD ["npm","start"]
