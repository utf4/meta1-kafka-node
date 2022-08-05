## Prerequisites

* `node`
* `docker`

## Running locally

* `npm install` - installs npm dependencies.
* `./scripts/start-kafka.sh` - starts kafka inside docker container.
* `./scripts/create-topic.sh` - creates kafka topic.
* `npm run start:publisher` - starts publisher.
* `npm run start:subscriber` - starts subscriber.
