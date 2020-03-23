# automate-api-dockerization

* `docker build -t my-api .`
* `docker run -it -p 9000:3000 my-api`
* `docker run -d -p 9000:3000 my-api`
* `docker ps`
* `docker kill <container id>`
* `docker-compose up`

DONE
* CRUD API with unit tests
* Push to Docker Hub via github actions
* Swagger
* ESLint

TODO:
* update readme
* Find a way to use ENV variables safely with Docker
* push prod file in dist folder to docker image instead of code
