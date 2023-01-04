FROM node:lts-alpine3.14
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
WORKDIR /app
RUN npm install
RUN npm install -g react-scripts
EXPOSE 3000
CMD ["npm","start"]
