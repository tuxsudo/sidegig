# Grab, read & set any environment variables in optional .env file
ifneq (,$(wildcard ./.env))
	include .env
	VARS = $(shell sed -ne 's/ *\#.*$$//; /./ s/=.*$$// p' .env )
endif
$(foreach v,$(VARS),$(eval $(shell echo export $(v)="$($(v))")))

# scripts to verify local dev is ready
# if something fails, then install it
init.prereqs:
	@which docker > /dev/null || (echo "Please install docker" && exit 1)
	@which docker-compose > /dev/null || (echo "Please install docker-compose" && exit 1)
	@which node > /dev/null || (echo "Please install node" && exit 1)
	@which yarn || (echo "Please install yarn" && exit 1)
	@[ -f .env.local ] || echo "" > .env.local

# scripts to initialize the project
init.install: init.prereqs
	@yarn

# scripts to remove installed artifacts
init.uninstall:
	@rm -rf node_modules

# get yo shiz running
init: init.prereqs init.install

#
# intialize infra needed to develop
docker.infra.up:
	@docker-compose up -d postgres

# stop the infra
docker.infra.down:
	@docker-compose rm -f -s postgres

# stop the infra
docker.infra.logs:
	@docker-compose logs -f postgres

docker.infra: docker.infra.down docker.infra.up

# build / rebuild the docker images
# should be ran after code changes
docker.web.build:
	@docker-compose build web

# start the web server
docker.web.up:
	@DATABASE_URL="postgresql://user:password@pg:5432/sidegig?schema=public" \
	JWT_SECRET="this_a_secret_dont_use_in_rl" \
	docker-compose up -d web

# end the web server
docker.web.down:
	@docker-compose rm -f -s web

# logs for web
docker.web.logs:
	@docker-compose logs -f web

# do all docker web things
docker.web: docker.web.build docker.web.down docker.web.up docker.web.logs

# make up all docker elements
docker.up: docker.infra.up docker.web.up
	@echo "All up"

# make down all docker elements
docker.down: docker.infra.down docker.web.down
	@echo "All down"

# follow all docker logs
docker.logs:
	@docker-compose logs -f

# local development -- web
local.web.dev: docker.web.down
	@DATABASE_URL="postgresql://user:password@localhost:5432/sidegig?schema=public" \
		yarn dev

# codegen
local.web.codegen:
	@yarn codegen

# shortcut to running in dev mode
local.web: local.web.codegen local.web.dev


# local migrations
local.migrations.stage:
	@DATABASE_URL="postgresql://user:password@localhost:5432/sidegig?schema=public" \
		yarn migrations.stage

local.migrations.commit:
	@DATABASE_URL="postgresql://user:password@localhost:5432/sidegig?schema=public" \
		yarn migrations.commit
