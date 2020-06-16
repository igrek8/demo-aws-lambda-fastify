# Movie Search Engine

## [Task description](./docs/Task.md)

## Prerequisites

NodeJS

```
v12.10.0
```

Yarn

```
1.21.1
```

Serverless

```
Framework Core: 1.72.0
Plugin: 3.6.13
SDK: 2.3.1
Components: 2.30.14
```

## Public API examples (AWS)

- [Show movie with id 3532674](https://eb90rv74zd.execute-api.us-east-1.amazonaws.com/dev/api/movies/3532674)
- [Show movies with title Sin City](https://eb90rv74zd.execute-api.us-east-1.amazonaws.com/dev/api/movies?title=Sin%20City)
- [Show movies with director Frank Miller](https://eb90rv74zd.execute-api.us-east-1.amazonaws.com/dev/api/movies?director=Frank%20Miller)
- [Show all movies](https://eb90rv74zd.execute-api.us-east-1.amazonaws.com/dev/api/movies)

## Task Outcome

- ✅ [AWS Lambda Function](./lambda.ts#L4)
- ✅ Caching - [LRU cache is used with TTL](./services/CachedOmdbProvider.ts#L24:3). LRU can be replaced with Redis for scaling.
- ✅ TypeScript

## Constraints

- ✅ Use node.js in version 10+
- ✅ Use ES7 or newer
- ✅ Do not introduce any system dependencies (databases, caches, search engines, docker, ..) to solve this task. This task is about your problem solving skills and not about creating a production ready system. It should not require more than `npm install` and `npm start` to have a running service.

## Best practices

- ✅ SOLID principles
- ✅ Tested HTTP endpoints and integrations
- ✅ Code is prettified
- ✅ Strict TypeScript
- ✅ Serverless for AWS deploy
- ✅ `aws-lambda-fastify` to use fastify for lambda
- ✅ Git workflow

## ✏️ Assumptions

- [Convert joyn.Rating with 5 stars to omdb.Rating](./services/SearchEngine.ts#L151)
- Use abstraction over implementation
- Use dependency injector for testing/initialization
- Use 12-factor config recommendation [.env](https://12factor.net/config)
- Use serverless IaC to deploy AWS lambda
- [Show a number of matches to indicate actual filtering](services/SearchEngine.ts#L50:5)

## Config

Create .env with the content below. Set `OMDB_ACCESS_TOKEN` for OMDB integration.

```
HOST=0.0.0.0
PORT=8080
NODE_ENV=production
OMDB_BASE_URL=http://www.omdbapi.com
OMDB_ACCESS_TOKEN=___YOUR_TOKEN___
LOG_LEVEL=debug
LRU_SIZE=25
LRU_MAX_AGE=432000
MOVIES_DIR=movies
```

## Installation

```bash
yarn
```

## API

Start server by running

```
yarn start
```

- [Show movie](docs/GetMovieById.md)
- [Show all movies](docs/GetAllMovies.md)
- [Search movies](docs/SearchMovies.md)

## Deploy

```
yarn deploy
```

## For reviewers

This repository has been developed to showcase my skills and knowledge in NodeJS.

I am open to any feedback that would make me a better professonal.

Thank you for your time to review this work 😉.
