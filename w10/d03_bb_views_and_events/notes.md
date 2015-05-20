# Backbone Views

## Learning Objectives

* Define the role of a view in a BB app
* Describe the purpose of an 'el' in a BB View
  * Differentiate b/t an assigned 'el' and a constructed 'el'
* Use a Backbone view to render a model to the page
* Use Handlebars templates to simplify rendering on the front-end
* Set up model events on Backbone views
* Set up user events on Backbone views

## Lesson Outline

1. Overview of BB MV*

**Model Views**

1. Overview of a model
2. Build a simple model view (tagName & className)
3. Add a render function to that view
4. Add to page manually / in app.js
5. Listening to model events
6. Listening to DOM events
7. Templates using Handlebars

I do example:   'reminders'
You do example: 'JAMJAR radio'
Homework:       'Grumblr'


## Backbone's MV* Pattern

Backbone follows what is called the MV* pattern. It has Models, Views, and
optionally Routers.

The models are much like in Rails, they manage data (both logical operations on
the data, as well as sync'ing with the server). Additionally, we have collections
which contain sets of model instances, and aid in syncing data to the server as
well.

Views handle both the normal view tasks of rendering data to the screen (through
the DOM, and optionally with the help of templates. In addition though, they act
as controllers, by responding to events and taking action accordingly. Events
may be both user events (e.g. clicks or typing), or model events (a model
notifies us when it has been changed). In response the view may re-render part
of itself based on the change, or perform an action such as an AJAX request to
the server.

We won't cover routers until tomorrow, but know that in short, they manage the
URL, so that it stays up to date to reflect what's happening in the app.


## Model Views

### Overview

Model Views have three main responsibilities:
1. Render an element or `el` (usually a div) that represents the model instance they are
associated with.
2. Listen for changes to that model instance, and update accordingly.
3. Listen for events in their `el`, and respond accordingly. (e.g. clicking a
  delete button).

Let's demonstrate by building a model view for our reminder's app.

### Building a Model View

We start by creating a file: `app/assets/javascripts/backbone/views/reminderView.js`.

This view extends the Backbone.View object (i.e. class).

```js
var ReminderView = Backbone.View.extend({
  className: "reminder",
  tagName: "div",

  initialize: function() {
    console.log("loaded reminder view");
  }
});
```

This view has a className and a tagName property, which means that the view will
auto-generate it's `el` to be a div with class 'reminder'. The el will not be
attached to the DOM until we do so explicitly however. Until then, it lives as
a 'ghost' in JS.

When we instantiate a model view, it's common to pass in a model instance as a
'model' property:

```js
var myReminder = new ReminderModel({body: "Practice cornhole before Friday."});
var myView = new ReminderView({model: myReminder});
```

Let's look at `myView.$el;`, it's an empty div with class reminder! Let's fill
it with information!

### Adding a 'render' function

Let's add a function that 'renders' the view, i.e. fills the `el` with the
correct HTML.

```js
render: function() {
  this.$el.empty();
  this.$el.append("<p>" + this.model.get("body") + "</p>");
  this.$el.append("<div class='finish'>Finish</div>");
},
```

Let's also update the `initialize` function to render the view upon creation.

```js
initialize: function() {
  console.log("loaded reminder view");
  this.render();
}
```

Now when we create a new view and look at its `el`, it's got the correct info!

Let's test adding one to the page:

```js
var myReminder = new ReminderModel({body: "Practice cornhole before Friday."});
var myView = new ReminderView({model: myReminder});
$("#reminders").append(myView.$el);
```

It works!

### Add all Reminders on page load

So our app feels more real, let's fetch all reminders and add them to our
`reminders` container div (it's in the app layout).

in `application.js`
```js
$(document).ready(loadRemindersApp);

function loadRemindersApp() {
  mainCollection = new RemindersCollection();
  mainCollection.fetch().done(function() {
    mainCollection.each(function(currentModel){
      var view = new ReminderView({model: currentModel});
      $("#reminders").append(view.$el);
    })
  });
}
```

### Listening to model events

One great feature of backbones is the events system. Conceptually, they work
much like DOM events, but there are a lot more of them. For example:

Whenever a model instance changes, wouldn't it be awesome if the view updated
as well? We can do that!

add to our view's `initialize` function:
```js
  this.listenTo(this.model, 'change', this.render);
```

let's test it:
```js
mainCollection.models[0].set({body: "does this even work?"});
mainCollection.models[0].set({body: "it does!"});
```

### Listening to DOM events

In addition to model events, we can also listen to DOM events, such as clicks,
hovers, etc.

in our view, add an events property:
```js
events: {
  'click.finish': 'markComplete'
},
```

This says, when the user clicks on anything with the class of finish, run the
`markComplete` function. We should define that function:

```js
markComplete: function() {
  var view = this;
  this.model.destroy()
    .done(function(){
      view.$el.fadeOut();
    })
    .fail(function() {
      alert("Oops! There was an error destroying that reminder. Please try again later.");
    });
}
```

### Templates using Handlebars

Take 5 minutes to read [the handlebars site](http://handlebarsjs.com).

Demonstrate / discuss the traditional method of delivering templates using
`<script>` tags.

Demonstrate the [`handlebars_assets` gem](https://github.com/leshill/handlebars_assets#installation) as a nicer alternative for rails apps.

Let's install it by following the instructions in the github docs linked above.

Next, let's define a template in `app/assets/javascripts/templates/reminders/show.hbs`:

```
<p>{{body}}</p>
<span class="finish">Finish</span>
```

We can now update our render function:
```js
render: function() {
  var renderedHTML = HandlebarsTemplates['reminders/show'](this.model.toJSON());
  this.$el.html(renderedHTML);
},
```
