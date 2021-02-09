# Side Gig

A template for creating new web-based products


## Getting started

Local development is managed via `make`, please see the [./Makefile](makefile) for a list an explanation of all commands.


### Initialize local development

```shell
make init
```

Resolve any missing dependencies identified by that make target.


### Bring up sidegig docker environment

```
make docker.up
```


### Begin local development of web server

```
make local.web.dev
```

