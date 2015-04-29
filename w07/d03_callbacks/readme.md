# Callbacks

## Learning Objectives


- Compare and contrast Ruby methods to Javascript functions.
- Explain the difference between referencing and invoking a function.
- Explain the concept of a 'callback' and how we can pass functions as arguments to other functions.
- Explain the difference between synchronous and asynchronous execution.
- Explain the concept of events and event driven programming.
- Explain what a promise is and how it differs from a callback.

## Review the Cash Register Exercise

Code along the solution from the start.

## Reference vs. invoking a function

```js
var button = document.querySelector("button")

// complete the next line to reference the validateForm function
button.addEventListener

button.onclick  
// 

function validateForm( event ){
  event.preventDefault()
}
```

## Callbacks

https://twitter.com/sw1tch/status/513363051987218432

```js
function do(callback){
  callback()
}
function doWhenDone(){
  console.log("done")
}
do( doWhenDone )

//or

do( function(){
  
})
```

## Synchronous vs. Asynchronous

We have mentioned this before. Why is synchronous behavior not conducive
to frond end development?





