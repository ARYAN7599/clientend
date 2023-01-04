FROM node:16.19.0-alpine
COPY . .
WORKDIR /app
RUN npm install -g react-scripts
EXPOSE 3000
CMD ["npm","start"]
