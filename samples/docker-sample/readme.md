# About

his sample is a simple app based on NodeJS, nginx and Angular, where we will be configuring and releasing all the images using
docker and docker-compose.

## Network

- docker network create complexmono

## Docker

- Postgress DB:  
  docker run --network complexmono --name mono-postgress -p 5432:5432 -e POSTGRES_USER=complexmono -e  
  POSTGRES_PASSWORD=complexmono123 -e POSTGRES_DB=complexmono -d postgres:11.2
- Redis:
  docker run --network complexmono --name mono-redis -d -p 6379:6379 redis:5.0.3
- Elastic:
  docker run -d --name mono-elasticsearch --network complexmono -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node"  
  elasticsearch:8.7.0
