# Side Gig

A template for creating new web-based products

## Getting started

Dockerized dependencies & docker testing is managed via `make`, please see the [./Makefile](makefile) for a list and explanation of all commands.

### Initialize local development deps

```
make init
```

Resolve any issues reported

### Initialize docker environment

```
# setup & run infra dependencies (eg: postgres)
make docker.infra

# run NextJS in dev mode
make local.web

# or run NextJS in docker mode (prod testing)
make docker.web
```
