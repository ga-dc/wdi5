Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Objects in JavaScript

## Learning Objectives

- Describe what a JS object is and how it compares to a Ruby hash
- Create JS Objects using literal syntax
- Set and retrive properties and methods on JS Objects
  - using dot syntax
  - using dynamic (bracket) syntax
- Explain the meaning of `this` in JS
- Enumerate properties of an object using:
  - for...in loops
  - Object.keys(obj)

## Outline

Start by discussing what's missing from our JS Knowledge:
* Hashes
* Objects / OOP / Inheritance (won't discuss inheritance much today)

In JS, we solve both of these with a concept called an object. Objects are like
hashes in Ruby in that they have key / value pairs, but they are different in
that we can access their properties using hash or dot-notation.

Additionally, since functions are closures, we can use them in JS to build
methods on objects.

They are different from ruby objects / clases in that they don't support
class-based inheritance. Instead they use prototypes, which we'll cover at a
later date.

### Creating / Using

Demo creating a car object using literal syntax.

```js
var car = {
  model: "Honda",
  color: "Red",
  speed: 0,
};
```

* Just like ruby

`car["model"];`

```js
property = "color";
car[property];
```

* new!!!
`car.model;`

Demo making a car with methods:

```js
var car = {
  model: "Honda",
  color: "Red",
  speed: 0,
  drive: function() {
    console.log("Vroooooooom!");
  },
  gas: function() {
    this.drive();
    this.speed += 10;
  }
};
```

**Y'all** Play with this for a couple minutes.  If something isn't working, look for hints in the code.
  `car.drive()` vs
  `car.drive`


** I do **
Explain what `this` is. It's basically self in ruby.

`console.log(this);` vs.
`console.log("this:" + this)` vs
`console.log("this:" + JSON.stringify(this));`


Enumerate over object properties with:
* for...in loops

```js
for (property in car) {
  console.log(property);
}
```

`car.drive` vs. `car.drive()`

```js
for (property in car) {
  console.log(property + ": " + car[property]);
}
```

* `Object.keys(car)`

* Save hasOwnProperty/getOwn for inheritence talk
  `Object.getOwnPropertyNames(car)`
  Compare and contrast in/hasOwnProperty()

### Monkey Exercise

Create a monkey object, which has the following properties:
* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce - introduces self, with name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and
methods defined.

Exercise your monkeys by retrieving their properties and using their methods.
Practice using both syntaxes for retrieving properties.

### Deeper into This [optional]

Create a person object with a name, species and things eaten. Have it 'steal'
the speak method from our monkey and notice that it


### Larger Exercise: TicTacToe

Write a TicTacToe constructor ('class') in JavaScript. Your class should have
the following:

Properties
* currentPlayer - string, either "X" or "O" (starts as "X")
* board         - 3x3 array, starts as all null e.g. [ [null, null, null],
                                                       [null, null, null],
                                                       [null, null, null]]

Methods
* toggleCurrent() - changes the value of currentPlayer to be the other player.
* play(player, x, y) - makes a play for player ("X" or "O") at the point specified on the grid. Updates board.
* checkWin() - returns "X", "O", or false depending on whether or not someone has won.

Suggestion:
Write three methods that will be used by checkWin:
* checkRows(), checkColumns(), checkDiagonals();



# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
