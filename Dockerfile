FROM ubuntu:18.04
USER root
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm","start"]
