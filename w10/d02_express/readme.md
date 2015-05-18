# Express and NodeJS

## Learning Objectives

- Compare and contrast Javascript in the browser vs JS on the server
- Use `npm` to manage project dependencies
- Use `module.exports` and `require` to organize code into models, views, and controllers
- Use Handlebars templates to simplify rendering on the back-end
- Use and configure middleware like `body-parser` to handle form submissions
- Link to static assets in an Express application

## What is node?

And how does it compare to client-side JavaScript?

## Hello Express

Express is the Sinatra of JavaScript

We do: Create a simple hello-world express application

1. Create a new directory
1. `npm init`
1. `npm install --save express`

```js
var express = require("express")
var app = express()

app.get("/", function( req, res ){
  res.send("hello world")
})

app.listen(3000, function(){
  console.log("app listening on port 3000")
})
```

Stopping the server and restarting the application everytime you make
a change slows us down. Use nodemon to run and restart your application:

1. `npm install -g nodemon`
1. `nodemon index.js`

```js
var express = require("express")
var app = express()

app.get("/", function( req, res ){
  res.send("hello world. Say hi to <a href='/jesse'>Jesse</a>")
})

app.get("/:name", function( req, res ){
  res.send("hello, " + req.params.name)
})

app.listen(3000, function(){
  console.log("app listening on port 3000")
})
```

You do: 99 Bottles of Beer

## Views and Assets

Use handlebars templates to provide layouts for the 99 bottles application.

    `$ npm install --save hbs`

```js
app.set("view engine", "hbs")
```

- Create a directory named 'views'.
- Create a file named 'views/index.hbs'.
- Create a file named 'views/layout.hbs'.

```html
<!-- layout.hbs -->
<html>
  <head></head>
  <body>
    {{{body}}} 
  </body>
</html>
```

### Configure a directory to serve static assets.

```
app.use(express.static(__dirname + '/public'))
```

Create a file "public/css/styles.css"

Link to it: `href="/css/styles.css"`

## module.exports and MVC

`module.exports` allows us to separate our js files by exposing their contents as one global variable, which is assigned
when we `require()` the file.

For example:

```js
//app.js
var myTotallyCustomModule = require("./myTotallyCustomModule.js")
myTotallyCustomModule.sayHello()
```

```js
//myTotallyCustomModule.js
myTotallyCustomModule.sayHello()
module.exports = {
  sayHello: function(){
    console.log(" hello world ")
  }
}
```

## You do: Pair Programming Bot

Use `module.exports` and `require()` to configure your routes, like:

```js
//index.js
var routes = require("routes")
app.get("/", routes.index )
```
http://pairprogrammingbot.herokuapp.com/

## Middleware

Use `body-parser` to parse submitted form data.

    $ npm install --save body-parser

```js
//index.js
var bodyParser = require("body-parser")
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.post("/", function(req, res){
  res.send( req.body.name )
})
```

## You do: Ultimate Compliment

## You do Instructor Code Challenge

https://github.com/jshawl/instructor_code_challenge/tree/master/node-backend-starter-code
