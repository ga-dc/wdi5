# AJAX

## LO's
- Explain the difference between synchronous and asynchronous program execution
- Explain why synchronous program execution is not conducive to the front-end.
- Use jQuery $.ajax() method to make asynchronous GET requests for data.
- Use jQuery's 'promise-like' methods to handle AJAX responses asynchronously.
- Contrast the old ('success') style of handling async with the new style.
- Render new HTML content using data loaded from an Ajax request.
- Perform POST, PUT, and DELETE requests to an API to modify data.


## Opening Framing(5m)
We've been floating around this concept of synchronous vs asynchronus program execution. But we haven't seen a real use case.

### T&T
Turn and talk to you neighbor, why might synchronus programming not be effective for the front end? Consider how http requests work with regard to front end functionality.


We don't want to sit around and wait for code to execute before we we load the rest of our script. It would be really nice if we could just describe what we want to happen when the code finally does execute, in a callback.

## Getting JSON response using `$.ajax()` (15 m)
For the first part of this lesson, we'll be using the (weather underground api)[http://www.wunderground.com/weather/api/d/docs]!

So if we go to this link, and we go to the example in the middle of the page, we can see a url, something like `http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json`

You guys can signup and register for your very own key! For now, let's just use mine `http://api.wunderground.com/api/f28a93cae85945b6/conditions/q/CA/San_Francisco.json`

Lets not go crazy and screw your instructor though, we only have a rate limit of 500!

So if you go to this URL, you'll see a really gigantic hash. It can be really intimidating at first. But let's just start clicking around till we find some information we might want to display.
> click on current_observation and parse through some properties

Turns out we can access this json object using JS!

## ENTER `$.ajax` (30 m) I do
The jquery library gives us access to this awesome thing called asynchronous json and xml(AJAX)

Go ahead and go to the starter code located in the milk and cookies repo(w08/d02_ajax/exercises/ajax_weather_underground)

Open the browser and see the alert, awesome, we know our jquery and script files are loaded correctly.
Walk through the following code:

```javascript
var url = "https://api.wunderground.com/api/f28a93cae85945b6/geolookup/conditions/q/va/midlothian.json"
$.ajax({
  url: url,
  type: "get",
  dataType: "jsonp"
}).done(function(){
  console.log("ajax request success!")
}).fail(function(){
  console.log("ajax request fails!")
}).always(function(){
  console.log("this always happens regardless of successful ajax request or not")
})
```

cool, we see that it was a success! lets try messing up the url and see if the console.log changes.. annnnddd it does

But, i thought we were able to access that big json object we saw before? Well you can, you have to add in an argument to the anonymous function callback. The ajax call gives returns a response back that you can than in turn pass in as an argument for the promise.

```javascript
.done(function(response)(){
  console.log(response)
})
```

Now if we look into the console, we should see something pretty familiar. Let's add some getters to the response:

```javascript
.done(function(response)(){
  console.log(response.current_observation.temp_f)
})
```
we can see that it's returning the current temperature.

### You do (until lunch)
- ajax_weather_underground exercise


### AJAX + Local API(10m)

Talk about why we want / need to put our JS on top of a rails app.

* Data storage across sessions
* Validation of data

#### jQuery AJAX

#### Walkthrough of OOP Trillo(30m)

Explain what's happening here.

## Break (10m)
#### I Do/We do(maybe some you do creating edit functionality) (120m take breaks as you see fit)
So we want this same sort of behavior on the front end, but we also want to communicate with our back end API and update the database accordingly.

Framing: We stand on the shoulders of giants.

Let's try to reverse engineer the solution for the standalone OOJS solution for trillo and incorporate AJAX calls along the way.

I think a good place to start is to just instantiate two models like the solution for the OOJS standalone solution:

```javascript
$(document).ready(function(){
  trilloModel = new Trillo();
  trilloView = new TrilloView(trilloModel);
});

```

I think the first thing I want to do is create a constructor function for my cards in `js/models/card.js`

```javascript
var Card = function(id, description, completed){
  this.id = id;
  this.description = description;
  this.completed = completed;
}
```

*Re-demo jQuery AJAX GET.*
I think the next thing we should do is define a constructor function that will hold all of our individual cards in `js/models/trillo.js`

```javascript
var Trillo = function(){
  this.cards = []
}
```

- Modify JS to fetch from server using AJAX.
We're going to at this point want to fetch the cards from our Rails API we created earlier today. Let's go ahead and create a `fetchCards()` function by prototyping Trillo

```javascript
Trillo.prototype = {
  fetchCards: function(callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://localhost:3000/cards"
    }).done(function(response) {
      console.log(response)
    }).fail(function(response){
      console.log("ajax get request failed")
    })
  }
}
```

This is nice, but really, we want to add JS card objects for each of our ruby objects into our Trillo model. We can do this by creating an additional function we will call `loadCards()`. This function will be called in our `.done` promise. The entire file `js/models/trillo.js` should look like this:

```javascript
var Trillo = function(){
  this.cards = []
  this.fetchCards();
}

Trillo.prototype = {
  fetchCards: function(callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://localhost:3000/cards"
    }).done(function(response) {
      trilloModel.loadCards(response);
      trilloView.render()
    }).fail(function(response){
      console.log("js failed to load")
    })
  },
  loadCards: function(response) {
    this.cards = [];
    for(var i = 0; i < response.length; i++){
      var card = new Card(response[i].id, response[i].description, response[i].completed);
      this.cards.push(card);
    }
  }

}
```

We added code for the following:
- an invocation of `fetchCards()` on instantiation
- invoked `loadCards` with a response argument on the `trilloModel` we instantiated in the global namespace in `app.js`
- definition of `loadCards` which is creating a new `Card()` for each card we fetch
- invoked `render()` on the `trilloView` we instantiated in the global namespace in `app.js`

But... we haven't defined what `render()` does or even the constructor function for the trilloView yet. Let's do that now in `js/views/trillo.js`. What kind of properties/functions should I insert into my TrilloView constructor function? I think we can look to the HTML for some answers to help us scope how we want our view to look. Ultimately though, from a programming perspective this depends on your own problem set when you try to utilize this on your own. There's no set standards heres. Again we'll use the Trillo solution from yesterday:

I think the first thing we want to do is add the DOM elements that we want to utilize in the domain of this view:

```javascript
var TrilloView = function(trilloModel){
  this.newCardButton = document.querySelector("#new-card-button")
  this.newCardText = document.querySelector("#new-card-text")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  this.model = trilloModel
  this.newCardButton.addEventListener("click", this.addCard.bind(this))
  this.render()
}
```

We added code for the following:
- key dom elements and made them attributes of our TrilloView object
- made the argument(which is a trillo object) an attribute of the TrilloView object
- an eventListener to the newCardButton with a call back of addCard, we also binded this
- invocation of the `render()`

You might be saying, we still don't know what `render()` does, and you've added another function (`addCard`) we don't know!

## Break(10m)

Let's shed some light on that. Let's prototype our TrilloView:

```javascript
TrilloView.prototype = {
  addCard: function(event){
    event.preventDefault();
    var description = this.newCardText.value;
    var card = new Card(null, description, false);
    card.save();
    this.render()
  },
  render: function(){
    this.toDoList.innerHTML = ""
    this.doneList.innerHTML = ""
    for(var i = 0; i < this.model.cards.length; i++){
      var cardView = new CardView(this.model.cards[i])
      if(this.model.cards[i].completed){
        this.doneList.appendChild(cardView)
      }
      else{
        this.toDoList.appendChild(cardView)
      }
    }
  }
}
```

`addCard` is a function that grabs the value of the dom element we created an attribute for in the TrilloView constructor function it creates a new JS Card object with that value, and then calls `save()` function on that object. Then it invokes the `render()` function on `this` the TrilloView object.

`render` is a function that empties the innerHTML of the DOM elements that we set as attributes in our TrilloView constructor function. It then loops through the model's(the trello object we passed in as an argument for the Trello View constructor function) Card objects and creates a `CardView` for each card inside of the trello model. Inside the loop is an if/else conditional that checks the completed status of the card objects and appends the CardView to either the `doneList` or the `toDoList`

....more functions we haven't defined... Worry not! we will define them.

New things in the most recent code additions:
- card object's `.save()` function is not defined.
- `CardView()` constructor function is not defined.




#### You do (delete)

First, demo jQuery AJAX DELETE.

They: Make it so clicking the delete button deletes on server.

#### We Do

DEMO passing data params in AJAX POST requests.

Implement creating new todos.

#### You Do

Implement in-line editing. Demo how it works.

Pairs.
