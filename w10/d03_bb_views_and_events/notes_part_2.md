# Backbone Collection Views

## Learning Objectives

* Define the role of collection views in Backbone
* Define the purpose of the `el` property on a Backbone View
* Write a collection view that renders model views.
* Write a collection view that listens to collection events.

## Lesson Outline

**Collection Views**

1. Overview of Collection View
2. The 'el' property
3. renderOne function
4. renderAll function
5. Listening to collection events

I do example:   'reminders'
You do example: 'JAMJAR radio'
Homework:       'Grumblr'

### Overview of Collection View

The job of a collection view is to manage multiple model views and attach them
to the appropriate place in the DOM (i.e. on the page).

It usually listens for additions to the collection, and for when the collection
has been reset (emptied / refilled) and refreshes the view accordingly.

### The 'el' property

If we don't speficiy the 'el' of a view, backbone will create a 'ghost' el that
only lives in JS until we attach it to the DOM.

Most collection views will have a specified el. That is, we specify a selector
to pick an element already on the page.

Let's create our collection view with a specified `el` and an initialize function:

```js
var RemindersListView = Backbone.View.extend({
  el: '#reminders',

  initialize: function() {
    console.log("created ReminderListView");
  }
});
```

When we instantiate it, we'll pass it a collection just like a model view gets a
model:
```js
var myCollection = new RemindersCollection();
var myCollectionView = new RemindersListView({collection: myCollection});
myCollectionView.$el;
```

### renderOne function

Let's add a `renderOne` function. This function will take a reminder model
instance as an argument. It will create a view for the model, and append that
view's el to the collection el.

```js
  renderOne: function(reminder) {
    var view = new ReminderView({model: reminder});
    this.$el.append(view.$el);
  }
```

Let's test it:
```js
var myCollection = new RemindersCollection();
var myCollectionView = new RemindersListView({collection: myCollection});
myCollectionView.$el;

var myReminder = new ReminderModel({body: "test"});
myCollectionView.renderOne(myReminder);
```

### renderAll function

Now, let's write a function `renderAll` that can render the entire collection,
using the `renderOne` function to help:

```js
  renderAll: function() {
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  }
```

### Listening to collection events

Let's update our initializer so that collection view listens to the `reset` and
`add` events on the collection:

```js
initialize: function() {
  console.log("created ReminderListView");
  this.listenTo(this.collection, 'reset', this.renderAll);
  this.listenTo(this.collection, 'add', this.renderOne);
},
```

### Updating our application JS

Now, we can replace the functionality in our `application.js` file with the
collection view:

```js
$(document).ready(loadRemindersApp);

function loadRemindersApp() {
  mainCollection = new RemindersCollection();
  mainListView = new RemindersListView({collection: mainCollection});
  mainCollection.fetch({reset: true});
}
```
