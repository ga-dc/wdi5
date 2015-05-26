# Back End Solutions

## How does server side JavaScript (NodeJS) compare to client side JavaScript? How are they different? How are they related?

Client side is primarily manipulating the DOM. Server side js gives us lower level access to the hardware - like file system and TCP connections

## What are the benefits and disadvantages of using a document based database (mongodb) instead of a relational database (postgresql)?

Mongodb allows unstructured data. focused on speed and concurrency. rdbs are good for efficiency and rigidly structured data

## What is the purpose of `module.exports`?

`module.exports` allows us to move code to separate files and export their functionality to the global namespace

## How do web sockets differ from ajax HTTP requests?

Web sockets are persistent connections that allow the server to "push"
information to a connected client. Ajax uses the traditional request/response model,
where users must explicitly request information from the server.