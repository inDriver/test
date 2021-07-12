# inDriver Apollo Client Starter

> inDriver React Apollo Client boilerplate

## Prerequisites

`~/.npmrc` should be configured with `@indriver` looking for github

## Contains

- Typescript 4
- React 17
- Apollo Client 3
- React Router 5.2
- Styled Components 5
- @indriver/ysera

-
- husky
- eslint
- tsconfig
- commitlint
- lint-staged

-
- jest
- enzyme
- babel
- webpack 4

## Dev

```sh
npm i
npm run start
```

## Codegen

Codegen provided by `@graphql-codegen`. To use it, you should replace `http://localhost/api/query` to actual endpoint. And run
```
npm run codegen
```

## Deploy

```sh
docker build --tag indriver/rylai --build-arg GITHUB_ACCESS_TOKEN=${GITHUB_ACCESS_TOKEN} -f configs/docker/Dockerfile.prod .
docker run -d -p 8100:80 indriver/rylai
```

## TODO

- [add] more complex app-skeleton after discussing the organization of the code base
