# Object Oriented JavaScript

## Learning Objectives

- Use getters and setters to access the properties of a Javascript object.
- Create objects using a constructor function.
- Emulate private methods with closures
- Describe what prototype chains are, and what is at the top of every chain.
- Describe what prototypal inheritance is, and how it differs from classical inheritance.
- Explain the importance of namespacing in JavaScript
- Describe the drawbacks of organizing all code into jQuery listeners
- Explain how the principles of Object Oriented design apply to Javascript
- Explain how separation of concerns applies to Javascript
- Organize code into model and view folders, with a main app.js 'controller' file
- Name the four patterns of function invocation, and the context assumed with each.

## Constructor Functions

Constructor functions allow us to create JavaScript objects with private members.

What is the difference between

```js
var animal = {
  name: "Jesse"
}
```
and

```js
var Animal = function( name ){
  var _name = name
  this.getName = function(){
    return _name
  }
}
```

Typically, you will only see variable declarations in the constructor function. All other functionality
( methods ) are added to the Object's prototype:

```js
var Animal = function( name ){
  var _name = name
}
Animal.prototype = {
  getName: function(){
    return _name
  }
}
```