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
## Backbone Models(50 m)
What's a model? What was it in rails?
To rehash:
An object that represents data attributes and behavioral logic related to an entity. It provides CRUD functionality for that data

Let's create some models!
Before we do that, let's set up our file structure and our dependencies for a new static site!

We're going to create a static html application. Go ahead and create a new directory we're going to work in, I'm going to call mine `reminder`. I heard you guys like todo apps.

```bash
mkdir reminder
cd reminder
```

Cool, lets make some folders and files.

```bash
touch index.html
mkdir js
mkdir js/models
touch js/app.js
touch js/models/reminder.js
```

> Something to note, backbone doesn't yell at you for having your code in the wrong folders. However, going forward it will be nice for you and future you to separate our concerns. You will see the more of this importance when we get into backbone views and routing.

The first thing I want to do is make sure all of my CDN's are loaded.(order is important!) Retrieve cdns from [here](https://cdnjs.com/)
In my `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Reminders!</title>
  </head>
  <body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"></script>
    <script src="js/models/reminder.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>

```
> Order is very important here. Note that underscore is a dependency of backbone and that jquery is a dependency of underscore. As a result we load jquery first, then underscore, then backbone. Additionally we want our model definition to follow the backbone dependency because we will be using backbone abstractions inside of the model file. And finally we also include the main app.js which will require our model definitions.

Let's define our very first backbone model. In `js/models/reminder.js`:

```javascript
Reminder = Backbone.Model.extend({

})

```
> Much like inheriting from `ActiveRecord::Base`. Were just extending backbone model functionality into our own model definitions.

Awesome! Let spin up our sweet website. (include a document ready and a consolelog to show js/jquery dependency is working). Let's go into the console and create our very first instance of a backbone model. `var reminder = new Reminder` lets see what it's given us by typing in `reminder` and hitting enter.

cid?! whats that?
[id vs cid vs idAttribute](http://stackoverflow.com/questions/12169822/backbone-js-id-vs-idattribute-vs-cid)

TLDR version: cid is short for client id, cid is assigned by backbone.js client side and is useful if you don't have an actual id.

There's alot of other stuff happening here that backbone's doing but the important part of it is the attributes object nested without our backbone object.

### Getting and setting attributes
#### Setting attributes(also updates)
Attributes can be set in a number of ways.
- We can set them on instantiation of the object ie
`var reminder = new Reminder({completed: false, body: "learn backbone!"})`
- We can set them on an existing objects
`reminder.set("difficulty", 5)`
`reminder.set({timeOfDay: "morning", visibility:"daytime"})`
  - can also set functions as attributes
  ```javascript
  reminder.set({
    remindUser: function(){
      console.log("Don't forget about doing" + this.body)
    }
    })
  ```
- we can also use `attributes`
`reminder.attributes.newAttribute = "this is a new attribute"`
- We can also set defaults in the model definition.
in `js/models/reminder.js`:
```javascript
Reminder = Backbone.Model.extend({
  defaults:{
    completed: false
  }
})
```
`var reminder = new Reminder`
#### Getting attributes
`reminder.get("attributeName")`
`reminder.attributes.attributeName`

#### Deleting attributes
`reminder.unset("attributeName")`
check with `reminder.has("attrbuteName")`
`reminder.clear()` - removes all attributes of a model

#### Initialize
Backbone models also come with an initialize function(like ruby classes)
```javascript
Reminder = Backbone.Model.extend({
  defaults:{
    completed: false
  },
  initialize: function(){
    console.log("new reminder!")
  }
})
```

## Lunch!
### In class ex(radio? grumblr?)

### Backbone Collections
What is a backbone collection? A collection acts as an intelligent wrapper for like models. It provides a set of methods for performing the CRUD operations on models of the collection.

#### Creating a collection
```javascript
var Reminders = Backbone.Collection.extend({
  initialize:function(){
    console.log("created a new reminders collection")
  },
  model: Reminder
})
```

We add the model as an attribute of the collection so that any objects we add to this collection will be passed in as objects of the Reminder Backbone model.

#### Setting models on collections
How are models added to a collection?
```javascript
// on instantiation of collection
var reminders = new Reminders([reminder1, reminder2, reminder3])

// set on existing collection
reminder.set([reminder1, reminder2])

// added to existing collection
reminder.add(reminder1)
```

#### Getting models from collection
```javascript
// gets all models
reminders.models

// get model based on cid
reminders.get("c1")
```
