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

### T&T (5m)
Turn and talk to you neighbor, why might synchronus programming not be effective for the front end? Consider how http requests work with regard to front end functionality.


We don't want to sit around and wait for code to execute before we we load the rest of our script. It would be really nice if we could just describe what we want to happen when the code finally does execute, in a callback.

### Getting JSON response using `$.ajax()`
For the first part of this lesson, we'll be using the (weather underground api)[http://www.wunderground.com/weather/api/d/docs]!
