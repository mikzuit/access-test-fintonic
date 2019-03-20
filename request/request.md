#RFC 2616 Standard

GET http://localhost:3333/api HTTP/1.1


GET http://localhost:3333/products HTTP/1.1
content-type: application/json


POST http://localhost:3333/products HTTP/1.1
content-type: application/json

{
    "name": "sample product",
    "description": "this is a sample product"
}

DELETE http://localhost:3333/api/products/1 HTTP/1.1
content-type: application/json
