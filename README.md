# Node Rest Api

## environment
Application runs on NODE_ENV = development environment

## Requirements
- Mongo DB with name "rest_api" on "mongodb://localhost:27017"
- Node.js version 10.15.3

## installation
- clone repo with "git clone https://github.com/mikzuit/node-rest-api-with-auth-request.git rest_api"
- set at development branch with "git checkout develop"
- install packages with "npm i"

## Authentication
- GET method work without authentication
- POST & DELETE needs a header "token" with value "token_string"

## testing
- install dev packages with "npm i --save-dev mocha && npm i --save-dev chai"
- on "testing" branch execute "npm test"

### Author
Miguel Ruiz aka Mik Zuit
