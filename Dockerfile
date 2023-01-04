FROM node:16.19.0-alpine
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
WORKDIR /app
RUN npm install
RUN npm install -g react-scripts
EXPOSE 3000
CMD ["npm","start"]
