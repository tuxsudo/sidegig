# Side Gig

A template for creating new fullstack, web-based products. Uses the following tools & tech:

- [NextJS / ReactJS](https://nextjs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Nexus GraphQL](https://nexusjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [Storybook](https://storybook.js.org/)
- Docker & Docker compose
- Postgres

## Getting started

Dockerized dependencies & docker testing is managed via `make`, please see the [./Makefile](makefile) for a list and explanation of all commands.

### Initialize local development deps

```shell
make init
```

Resolve any issues reported

### Initialize docker environment

```shell
# setup & run infra dependencies (eg: postgres)
make docker.infra

# run NextJS in docker mode (prod testing)
make docker.web
```

### Initialize the development environment

```shell
# make sure dockerized postgres is running
make docker.infra

# make sure database is in sync with migrations
make local.migrations.commit

# start nextjs in dev mode
make local.web
```

### Creating Migrations

To create new database models:

1. Edit the [prisma/schema.prisma](./prisma/schema.prisma) file.
2. Run `make local.migrations.stage local.migrations.commit`
3. Restart development server regenerate codegen.
