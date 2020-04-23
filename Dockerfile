FROM node:12
WORKDIR /usr/src/env
COPY . .
RUN npm install
EXPOSE 80
RUN npm install -g webpack
CMD ["node", "app/server_http.js"]
