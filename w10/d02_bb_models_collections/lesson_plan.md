# Backbone Models and Collections

## Learning Objectives
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

## Opening Framing
What's the purpose of a front end framework? JS and all of it's many libraries are great, but you can start building and building upon your application and all of sudden you have no structure and everything's soupy.

### Libraries vs Frameworks
#### libraries (5m)
- libraries gives us tools to utilize.
- abstracts code and allows us to write our code more succinctly
- allows us to write applications faster and easier
#### frameworks (5m)
- like libraries in that it gives us tools to utilize
- additionally they provide structure and conventions users have to follow in order for them to work.

### What is a front end framework? (10m)
- a library that attempts to consolidate all application logic in the browser, while providing a simple interface for keeping the front-end in sync with the back-end
- applications can run completely in the browser, minimizing server load since the server is only accessed when the front end needs to synchronize data with the backend
- responds once with an HTTP request then handles all subsequent requests with AJAX
- provides more fluid user experience
- loads everything from the database on page load (data and templates) then renders/updates the page content based on user interaction.

### What is backbone? (30m)
Individual reading(10m)
- Go to [backbonejs documentation](http://backbonejs.org/)
  - Read from Getting Started to Backbone.Model
T&T(5m)
- With what you know about OOJS, jot down some ideas about what you think Backbone is and why you would use it.

---
### Backbone
- a js library that was built to mimic the rMVC structure of Rails
- router, views, models/collections
  - organize code into separate components that are able to interact fluidly with each other to build robus, client/browser based web applications
- not truly a "framework" in that their is much more flexibility and not nearly a rigidly defined structure like rails.
- meant be able to be changed/altered/configured to suit your needs
- provides objects that help separate concerns on the front end
- provides an interface, API, for communicating with a server back end

### Break (10m)
## Backbone Models
What's a model? What was it in rails?
To rehash:
An object that represents data attributes and behavioral logic related to an entity. It provides CRUD functionality for that data

Let's create some models!
Before we do that, let's set up our dependencies on a static site.
