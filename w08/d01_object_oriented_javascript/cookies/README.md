# Object Oriented JavaScript

## Learning Objectives

- Use getters and setters to access the properties of a Javascript object.
- Emulate private methods with closures.
- Create objects using a constructor function.
- Describe what prototype chains are, and what is at the top of every chain.
- Describe what prototypal inheritance is, and how it differs from classical inheritance.
- Explain the importance of namespacing in JavaScript.
- Describe the drawbacks of organizing all code into jQuery listeners.
- Explain how the principles of Object Oriented design apply to Javascript.
- Explain how separation of concerns applies to Javascript.
- Organize code into model and view folders, with a main app.js 'controller' file.

## Object Orientation

Hi! This is an object: `{}`. Now you're oriented.

![Bad joke](http://media.giphy.com/media/xn2BRZmrIJxmM/giphy.gif)

Objects in JavaScript are a bit different from the ones you are used to from ruby, but many of the same object-oriented design principles you applied when writing your rails apps can apply when writing front-end JavaScript.

What is the definition of an object? An object encapsulates related data and behavior. Why might we want to do this? Object-oriented programming provides us with opportunities to clean up our procedural code and model it more-closely to the external world.

Suppose we were building a card game. We'd start by building a deck. What does the deck of cards look like? Perhaps:

```js
var deck = ["Ace of Spades", "2 of Diamonds", "Queen of Diamonds", ... ] // etc
```

To a reader, it's immediately obvious that we have a deck of cards. But, when we go to use our data structure, say in a game of high card, we notice a few problems.

```js
// does the Ace of Spades beat the 2 of Diamonds? How do we compare strings?
var card0 = deck[0]; //=> "Ace of Spades"
var card1 = deck[1]; //=> "2 of Diamonds"
if ( translate(card0) > translate(card1) ) {
  return "Player 1 wins!";
} else {
  return "Player 2 wins!";
}
```

We've had to write a whole other global method just translate card faces into numerical values for comparison. You can see how this code is *proecdural*: we do things step by step, manually creating values as we go in order to accomplish our work. Instead, we might have taken an object-oriented approch:

```js
var deck = [{
  face: "Ace of Spades",
  numValue: 14,
  suit: "Spades",
  value: "Ace",
  beat: function beat (otherCard) {
    this.numValue > otherCard.numValue ? true : false
  }
}, { ... }, ... ] // etc
```

There is still a lot of repetition in our object code. We'll see how to take care of this in a moment. But, for now, notice how our comparison code is much simpler:

```js
deck[0],beat(deck[1]) ? "Player 1 wins!" : "Player 2 wins!"
```

The reason this is simpler is easy: we've encapsulated the comparison logic in the card object itself, as well as each card's numerical value.

## Prototypal Inheritance

For example, JavaScript uses *prototypal* inheritance, rather than the classic inheritance ruby provides. In JavaScript, there are no classes. Instead, objects inherit directly from other objects. We can actually emulate prototypal inheritance in ruby. What's going on in the following code?

```ruby
animal = "cat"

def animal.speak
  puts "me-ow"
end

animal.speak #=> "me-ow"

dog = animal.clone

dog.speak #=> "me-ow"

def dog.speak
  puts "woof"
end

dog.speak #=> "woof"
```

We're defining methods *directly* on instances of an object (in this case, a String). When we're ready to make a similar object with shared data or behavior, we simply clone the object and modify it. This is prototypal inheritance.

In JavaScript, a *prototype* holds a description of an object: what data and behavior all objects of a certain type share. In classic JavaScript programming, we use prototypes and constructor functions to describe new types of objects and to create them. For example:

```js
var Animal = function Animal (name) {
  var _name = name;
  this.getName = function getName () {
    return _name;
  }
}

var cat = new Animal("Felix");
cat.getName(); //=> "Felix"

var dog = new Animal("Rover");
dog.getName(); //=> "Rover"
```

## Constructor Functions and Private Scope

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

The first example has a public property `name`. The second example only has a getter method to access the name property.

**Question** Why are we doing this?

We’re focusing on code quality and maintainability as your applications grow in complexity.

## You do: Animal Prototypal Inheritance

## We do Object Oriented Tic Tac Toe

What functionality should be in a model? What should be in a view?

## You do Trillo

<https://github.com/ga-dc/trillo>


