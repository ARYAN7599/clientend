FROM node:lts-alpine3.14
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
WORKDIR /app
RUN npm install -g npm@9.2.0
RUN npm install -g react-scripts -f
EXPOSE 3000
CMD ["npm","start"]
