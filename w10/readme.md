# Week 10

## Learning Objectives

### Sass

- Explain what a preprocessor is and what problem it solves
- Use variables and nesting to dry up CSS
- Use color functions to create dynamic color schemes
- Explain what `&` is and why we use it
- Use @include and @extend to create mixins and inherit from other rules

### Responsive Web Design

- Use `@media` queries and `meta` tags to adjust layouts based on screen size
- Distinguish between dimensions expressed as viewport units, pixels, percentages, and ems
- Test a website in various browsers using cross-browser testing tools
- Incorporate progressive enhancement into the development of a web application
- Describe which CSS and Javascript properties are accepted by which browsers

## Front-End JS

### Backbone Models and Collections
- Explain how libraries differentiate from frameworks.
- Describe the benefits of using a front end framework
- Define a new backbone model and create multiple instances of it
- Perform CRUD actions on a backbone model
- explain what a collection is in backbone
- define a new backbone collection
- use the backbone collection to store models
- create/add a new model to a collection
- access models in a collection
- remove models from a collection

### Backbone Views

* Define the role of a view in a BB app
* Describe the purpose of an 'el' in a BB View
  * Differentiate b/t an assigned 'el' and a constructed 'el'
* Use a Backbone view to render a model to the page
* Use Handlebars templates to simplify rendering on the front-end
* Set up model and collection events on Backbone views
* Set up user events on Backbone views

### Backbone Routers

* Explain why a router is needed for a front-end application
* Diagram the router's place in the Backbone stack
* List the responsibilities of the Backbone router
* Define routes, define routing functions, and initialize a router
* Explain what a typical routing function does
* Explain the difference between static and dynamic routes
* Give examples of using `:params` in routes and route functions
* Recall the order in which routes are matched

## Back-End JS

### Express and NodeJS

- Compare and contrast Javascript in the browser vs JS on the server
- Use `module.exports` and `require` to organize code into models, views, and controllers
- Use `npm` to manage project dependencies
- Use Handlebars templates to simplify rendering on the back-end
- Use and configure middleware like `body-parser` to handle form submissions
- Link to static assets in an Express application

### Mongo

- Compare and contrast relational to document based (NoSql)
- Setup local mongo db server
- CRUD documents using mongo CLI
- Use an ORM to persist data (Mongoose)
- Connect ORM to an Express app, to persist data

### WebSockets

- Compare / Contrast the Request/Response model of HTTP with the bi-directional
model of WebSockets
- Use the Socket.io library to write a client & server that communicate over
WebSockets.
