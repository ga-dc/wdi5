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

But, i thought we were able to access that big json object we saw before? Well you can, you have to add in an argument to the anonymous function callback

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


### AJAX + Local API

Talk about why we want / need to put our JS on top of a rails app.

* Data storage across sessions
* Validation of data

#### jQuery AJAX

#### Walkthrough of OOP Trillo

Explain what's happening here.

#### I Do

Re-demo jQuery AJAX GET.

Modify JS to fetch from server using AJAX.

Demo simulating slowness using sleep in the index controller action. Can still interact with other JS while data loads.

#### You do (delete)

First, demo jQuery AJAX DELETE.

They: Make it so clicking the delete button deletes on server.

#### We Do

DEMO passing data params in AJAX POST requests.

Implement creating new todos.

#### You Do

Implement in-line editing. Demo how it works.

Pairs.
