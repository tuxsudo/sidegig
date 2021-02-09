# default environment variables are defined in local.env
# create a secrets.env to override any value
include *.env
export

#
#
# project initialization
#
#

# scripts to verify local dev is ready
# if something fails, then install it
init.prereqs:
	@which docker > /dev/null || (echo "Please install docker" && exit 1)
	@which docker-compose > /dev/null || (echo "Please install docker-compose" && exit 1)
	@which node > /dev/null || (echo "Please install node" && exit 1)
	@which lerna > /dev/null || (echo "Please install lerna, eg:\n\tnpm i -g lerna" && exit 1)

# scripts to initialize the project
init.install: init.prereqs
	@lerna bootstrap

# scripts to remove installed artifacts
init.uninstall:
	@rm -rf packages/*/node_modules
	@rm -rf node_modules

# get yo shiz running
init: init.prereqs init.install

#
#
# docker
#
#

# build docker images
docker.web.build:
	@docker-compose build web

# build / rebuild the docker images
# should be ran after code changes
docker.build: docker.web.build
	@echo "done"

# intialize infra needed to develop
docker.infra.up:
	@docker-compose up -d postgres

# stop the infra
docker.infra.down:
	@docker-compose rm -f -s postgres

# start the web server
docker.web.up:
	@docker-compose up -d web

# end the web server
docker.web.down:
	@docker-compose rm -f -s web

# logs for web
docker.web.logs:
	@docker-compose logs -f web

# make up all docker elements
docker.up: docker.infra.up docker.web.up
	@echo "All up"

# make down all docker elements
docker.down: docker.infra.down docker.web.down
	@echo "All down"

# follow all docker logs
docker.logs:
	@docker-compose logs -f

#
#
# local dev commands
#
#

# codegen
local.models.codegen:
	@lerna run codegen --scope @tuxsudo/sidegig-models --stream 

# creates a new migration in sidegig-modules
local.models.stage:
	@DATABASE_URL="${DATABASE_URL_LOCAL_MIGRATIONS}" \
		lerna run migrations.stage --scope @tuxsudo/sidegig-models --stream  

# commits staged or unstaged migrations
local.models.commit:
	@DATABASE_URL="${DATABASE_URL_LOCAL_MIGRATIONS}" \
		lerna run migrations.commit --scope @tuxsudo/sidegig-models --stream  

# build the models bundle
local.models.dist:
	@lerna run dist --scope @tuxsudo/sidegig-models --stream

# clean the models bundle
local.models.clean:
	@rm -rf packages/sidegig-models/dist

# local development -- web
local.web.dev: docker.web.down
	@PORT=${WEB_PORT} \
		lerna run dev --scope @tuxsudo/sidegig-web --stream 

# local build -- web
local.web.dist:
	@lerna run dist --scope @tuxsudo/sidegig-web --stream

# clean the local web
local.web.clean:
	@rm -rf packages/web/.next


# build all the things
local.dist: local.models.dist local.web.dist

# clean all the things
local.clean: local.models.clean local.web.clean

# codegen all the things
local.codegen: local.models.codegen


#
#
# debug
#
#

# show currently configured env vars
debug.env:
	@echo "DATABASE_URL: $(DATABASE_URL)"
	@echo "WEB_PORT: $(WEB_PORT)"