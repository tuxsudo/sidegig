# default environment variables are defined in local.env
# create a secrets.env to override any value
include *.env
export


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

# build docker images
docker.build.web:
	@docker-compose build web

docker.build: docker.build.web

# intialize infra needed to develop
docker.up.infra:
	@docker-compose up -d postgres

# stop the infra
docker.down.infra:
	@docker-compose rm -f -s postgres

docker.up.web:
	@docker-compose up -d web

docker.down.web:
	@docker-compose rm -f -s web

# make up all docker elements
docker.up: docker.up.infra docker.up.web
	@echo "All up"

# make down all docker elements
docker.down: docker.down.infra docker.down.web
	@echo "All down"

# local development -- web
local.dev.web:
	@PORT=${WEB_PORT} \
		lerna run dev --scope @tuxsudo/sidegig-web --stream 

# local build -- web
local.build.web:
	@lerna run build --scope @tuxsudo/sidegig-web --stream

# local clean up
local.dev.clean:
	@rm -rf packages/web/.next

# debug
debug.env:
	@echo "WEB_PORT: $(WEB_PORT)"
