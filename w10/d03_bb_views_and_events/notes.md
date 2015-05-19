Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Backbone Views

## Learning Objectives

* Define the role of a view in a BB app
* Describe the purpose of an 'el' in a BB View
  * Differentiate b/t an assigned 'el' and a constructed 'el'
* Use a Backbone view to render a model to the page
* Use Handlebars templates to simplify rendering on the front-end
* Set up model and collection events on Backbone views
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

**Collection Views**

1. Overview of Collection View
2. The 'el' property
3. renderOne function
4. renderAll function
5. Listening to collection events

I do example:   'reminders'
You do example: 'JAMJAR radio'
Homework:       'Grumblr'


### DRAFT BELOW

### Where are we so far?

**I do**

* Whiteboard backbone models and collections
* Whiteboard the server space as well

* Let's concern ourselves with a single model
* We want to see it on the page.
* Whiteboard the backbone view-model MO

### Along came a view

**You do**

* Add a `div#test` after `div#library-section`
* Create the file `app/assets/javascripts/templates/songs/test.hbs`
* Inside this file, create an html template for a song
  * A div of class 'song-image'
    * An image tag displaying the album art
  * A div of class 'song-info'
    * A paragraph tag containing the title of the song
    * A paragraph tag containing the artist of the song
* Create the file `app/assets/javascripts/backbone/views/testView.js`
* Inside this file, create a view constructor as follows

```javascript
var TestView = Backbone.View.extend();
```

**I do - you follow**

* el - is for my piece of the big DOM tree
* template - is for the way that you'll see me
* render - is how you tell me to fill my el
* toJSON - is to objectify a model for Handlebar eyes

```javascript
var TestView = Backbone.View.extend({
  el: '#test',
  initialize: function() {
    this.template = HandlebarsTemplates['songs/test'];
  },
  render: function() {
    var testHtml = template(this.model.toJSON());
    $el.html(testHtml);
  }
});
```

* Demo this to put a song on the screen
* Modify the song's attributes
* Re-render the view
* Now here's the BIG BACKBONE THING
* Listen to that model! When it changes, you render!
* I set up on change listener

**We do - pairs**

* Refer the backbone docs for a complete catalog of events and methods on a view
* Use these two pieces of knowledge to set up a listener in the initialize method
  that will remove the view from the page when the view's model is destroyed

**BREAKTIME**

**I do**

* Whiteboard the collection holding models
* Differentiate between 'absolute' views, and 'partial' views
* Our goal is to have a single 'library' abs view, that will render a bunch of
  'song' partial views

```javascript
var SongView = Backbone.View.extend({
  className: 'song', // this used to be an el

  initialize: function() {
    this.template = HandlebarsTemplates['songs/song'];
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});

```

* Demo this in the console

**You do**

* Set up a `SongsListView`
  * Create the file
  * Define the constructor
  * Ensure that the view will be tied to `#library`
  * Set up an initialize function that will `console.log('Song List View, reporting for duty')`

**We do - pairs**

* Write a render function for the SongListView, and...
* Instead of `console.log`-ing, have the initialize function call the render function
* The render function should
  * Empty the view's el
  * Iterate over the view's collection. For each model,
    * Create a SongView (like a partial view, remember?)
    * Render the SongView
    * Append the SongView's el to this view's el

* Get this working with a .fetch({success: callback})
* Refactor to a .fetch({reset: true})

**BREAKTIME**

### A player

**You do**

* Set up a template for a player in `app/assets/javascripts/templates/songs/player.hbs`
  * Make it identical to the song.hbs template for now!
* Set up a `PlayerView`
  * Create the file
  * Define the constructor
  * Ensure that the view will be tied to `#player`
  * Set up an initialize function that will
    * Assign `this.template` to the right Handlebars template
    * Call the `render` function
  * Set up a render function that will
    * Empty the view's `el`
    * Use the template to fill the view's `el` based on the view's model

**Checkpoint**

**I do - You follow**

* Make it siiiiiiiiiiiing

### Looking back

* I whiteboard everything we just did conceptually
* You take 10 minutes to look through the code we've written and write down questions
* Then you ask questions, and I answer to the class

# Lesson Plan - Review Notes

* Are learning objectives present and complete?
* What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
* What is the level of engagement?
* Are exercise plans present?
* Any pitfalls with the exercises?
