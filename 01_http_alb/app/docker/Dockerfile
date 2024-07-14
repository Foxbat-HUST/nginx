FROM node:18.17.0-alpine
RUN mkdir app
RUN ls
COPY package*.json /app
COPY app.js /app
WORKDIR app
RUN npm install
EXPOSE 8080
CMD [ "node", "app.js" ]