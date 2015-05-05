# Object Oriented JavaScript

## Screencasts

- <https://vimeo.com/126976235>
- <https://vimeo.com/126976237>
- <https://vimeo.com/126976234>
- <https://vimeo.com/126976236>

## Learning Objectives

- Use getters and setters to access the properties of a Javascript object.
- Emulate private methods with closures
- Create objects using a constructor function.
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

The first example has a public property `name`. The second example only has a getter method to
access the name property.

**Question** Why are we doing this?

We’re focusing on code quality and maintainability as your applications grow in complexity.

### Function Invocation

- `someFunc()`
- `new SomeFunc()`
- `call` and `apply`

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

## Prototypal Inheritance

A prototype is a collection of attributes and methods. Every object in Javascript has one prototype.
It can be defined as in the above example or point to another object

<http://repl.it/mDe/4>

## You do: Animal Prototypal Inheritance

## We do Object Oriented Tic Tac Toe

What functionality should be in a model? What should be in a view?

## You do Trillo

<https://github.com/ga-dc/trillo>


