FROM node:18.16.0-alpine

WORKDIR /base

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .

USER node