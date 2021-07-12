FROM node:12-alpine
ARG GITHUB_ACCESS_TOKEN
ENV GITHUB_ACCESS_TOKEN=$GITHUB_ACCESS_TOKEN

WORKDIR /usr/app

COPY ./package.json .
RUN echo -e "//npm.pkg.github.com/:_authToken=${GITHUB_ACCESS_TOKEN}\n@indriver:registry=https://npm.pkg.github.com" > .npmrc

RUN npm i

COPY . .

RUN rm -rf .npmrc

CMD ["npm", "run", "start"]