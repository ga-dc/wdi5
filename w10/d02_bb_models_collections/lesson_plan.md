# Backbone Models and Collections
[https://www.youtube.com/playlist?list=PLr-f6JB1aX931bFvLAAoq0fTy1C7zxUqP](https://www.youtube.com/playlist?list=PLr-f6JB1aX931bFvLAAoq0fTy1C7zxUqP])
## Learning Objectives
- Explain how libraries differ from frameworks.
- Describe the benefits of using a front end framework
- Define a new backbone model and create instances
- Perform CRUD actions on a backbone model
- Explain what a collection is in backbone
- Define a new backbone collection
- Use the backbone collection to store models
- Perform CRUD on a collection
- Install backbone into a rails application
- Associate a backbone model and collection with a rails backend
- Perform CRUD actions using backbone's RESTful API

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
- a library that attempts to move some or all application logic to the browser, while providing a simple interface for keeping the front-end in sync with the back-end
- applications can run completely in the browser, minimizing server load since the server is only accessed when the front end needs to synchronize data with the backend
- server sends over the app in the initial request (HTML/CSS/JS) then JS makes all subsequent requests with AJAX
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
  - organize code into separate components that are able to interact fluidly with each other to build robust, client/browser based web applications
- not truly a "framework" in that there is much more flexibility and not nearly a rigidly defined structure like rails.
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

The first thing I want to do is make sure all of our dependencies are loaded from a CDN.(Order is important!) Retrieve libraries from [here](https://cdnjs.com/)
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

Awesome! Let spin up our sweet website. (include a document ready and a console.log to show js/jquery dependency is working).

Let's go into the console and create our very first instance of a backbone model. `var reminder = new Reminder` lets see what it's given us by typing in `reminder` and hitting enter.

cid?! whats that?
[id vs cid vs idAttribute](http://stackoverflow.com/questions/12169822/backbone-js-id-vs-idattribute-vs-cid)

TLDR version: cid is short for client id, cid is assigned by backbone.js client side and is useful if you don't have an actual id.

There's alot of other stuff happening here that backbone's doing but the important part of it is the attributes object nested within our backbone object.

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

Note: `.get` / `.set` are generally preferred over direct access via `.attributes`

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
### Class ex on Models(JAMJAR radio models)

### Backbone Collections (60m)
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
reminders.set([reminder1, reminder2])

// added to existing collection
reminders.add(reminder1)
```

#### Getting models from collection
```javascript
// gets all models
reminders.models

// get model based on cid
reminders.get("c1")

// like active record you can use where to return an array of objects fitting the match
reminders.where({attributeName: "valueOfAttribute"})
// findWhere finds the first match
reminders.findWhere({attributeName: "valueOfAttribute"})
```

#### Removing models
```javascript
// removes accepts a single model object, a cid or array of model objects
reminders.remove("c1")
reminders.remove(objectVariable)
reminders.remove([reminder1, reminder2])

// reset if passed in an array of objects removes all models and replaces with the passed in model objects, if no argument is passed in, resets collection to have no models
reminders.reset([reminder1, reminder2])
reminders.reset()
```

#### Also of note
Collections can use the following:
- push
- pop
- unshift
- shift
- length

### Class Ex on collections(JAMJAR radio collections)

## BB on Rails(60m)

So we've learned how to create backbone models and collections, but it'd be really nice if we could define our models/collections through an existing backend. Enter rails. But it doesn't have to be! But for the purposes of this class we'll use a nice and simple rails application that we've created for you.

If you pull from the class repo, go to w10>d02_bb_models_collections. The rails app is located in bb_rails_reminder/starter.

There's a bit of configuration we need to do on our application in order for it to work.

In the `Gemfile`, add `gem "rails-backbone"`

Next we want to load all of the JS we will need in our `app/assets/javascripts/application.js` file:

```javascript
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree .
```

Hmmm well, we don't have any of these folders, and what do they mean?!
Lets create them now in our applications root directory and also create a couple js files to define our models and collections
```bash
mkdir app/assets/javascripts/backbone
mkdir app/assets/javascripts/backbone/routers
mkdir app/assets/javascripts/backbone/models
mkdir app/assets/javascripts/backbone/collections
mkdir app/assets/javascripts/backbone/views
touch app/assets/javascripts/backbone/models/reminderModel.js
touch app/assets/javascripts/backbone/collections/remindersCollection.js
```

#### Models
Remember all that complex ajax stuff we used to get information from a server? Well BB abstracts all of that for you and makes it much easier. All we have to do is change up our model definition slightly! In `app/assets/javascripts/backbone/models/reminderModel.js`:

```javascript
var Reminder = Backbone.Model.extend({
  urlRoot: "/reminders",
  defaults: {
    compelted:false
  }
});
```

> it should be noted that if you are to use an external api you would specify the endpoint here in the urlRoot

Everything you did before is the same. The only difference now is if we want to make changes to the database. We just need to call `.save()` on the instance of the object.

> Note that if you pass in attributes that are not whitelisted by strong params, it will fail to save to the database. So make sure you only pass in key value pairs that are associated with your backend.

#### Collections
Now let's create our collection definition in `app/assets/javascripts/backbone/collections/remindersCollection.js`:

```javascript
var RemindersCollection = Backbone.Collection.extend({
  initialize: function() {
    console.log('New Reminders Collection');
  },
  model: ReminderModel,
  url: '/reminders'
});
```

Again, the rules are much the same for manipulating data within the collection.
Similarly to ActiveRecord there is a create method that can be called on a collection:

```javascript
  collection.create({attributeName: attibuteValue})
```
will actually save an instance of that model to the database, so long as you meet the strong params requirements.
