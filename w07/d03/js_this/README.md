![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# What is `this`?

![What is this?](http://i.giphy.com/bYGMDZP58u5bi.gif)

## Objectives

By the end of this lesson, students should be able to:

- Describe the difference between global and local scope in JavaScript.
- Recall which part(s) of JavaScript create new scope.
- Give an example of which part(s) of JavaScript do not create new scope.
- Recall whether or not `this` is determined at declaration.
- Explain what `this` points to in each calling context.
- Read and follow the execution context of code that uses different `this` idioms.

## Global and Local Scope

Suppose we add the following as the first line to a new file called `cookies.js`:

```js
var favoriteCookie = "Snickerdoodle";
```

The `favoriteCookie` variable is created in "global" scope. Global scope is simply the default scope, or top-most scope, we work within in JavaScript.

Local scope, on the other hand, is scope that is limited to a new function. For example:

```js
// global scope
var favoriteCookie = "Snickerdoodle";

var takeFromJar = function takeFromJar () {
    var who = "Adam took the cookie from the cookie jar!"; // `who` is defined in the local scope (the function scope)
    console.log("Who took the cookie from the cookie jar?", who);
};

who; //=> undefined
```

The rule for scope in JavaScript is simple: only functions create new scope. Nothing else in the language creates a scope: not loops, not conditionals. All function scopes are said to be *nested* within the global scope, since they are defined within the global scope.

**Hint:** Following indentation style guidelines can help you follow scope when you're reading or writing nested functions.

Now that we know a bit more about how scope is created in JavaScript, we begin to see the importance of the `var` keyword. If you assign something to a variable in JavaScript *without* using `var`, that variable floats up to global scope. This is a Bad Idea™.

```js
var oreo = "DoubleStuf";

var bestOreo = function bestOreo () {
    oreo = "Mint";
    console.log(oreo);
};

bestOreo(); //=> "Mint"
oreo; //=> "Mint" overwrote "DoubleStuf"
```

If we don't use the `var` keyword, we have to always be aware of what is in global scope. That's hard to do, it makes understanding scope more complex. Our advice is to always use `var` when assigning something to a variable.

## `this` Is A Reference

> We use this similar to the way we use pronouns in natural languages like English and French. We write: “John is running fast because he is trying to catch the train.” Note the use of the pronoun “he.” We could have written this: “John is running fast because John is trying to catch the train.” We don’t reuse “John” in this manner, for if we do, our family, friends, and colleagues would abandon us. Yes, they would. In a similar aesthetic manner, we use the this keyword as a shortcut, a referent to refer to an object.
>
> Source: [Understanding Javascript 'this' pointer.](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)

## `this` Changes by Call Context

A function can indiscriminately operate upon *any* object. When a function is invoked, it is *bound* to an object on which it operates. The *contextual* object on which a function operates is referenced using the keyword `this`.

```js
var xwing = {
    pilot: null,

    setPilot: function(pilot) {
        this.pilot = pilot;
        this.update();
    },

    update: function() {
        console.log('This X-Wing has changed!');
    }
};

xwing.setPilot("Luke Skywalker");
// >> "This X-Wing has changed!"

console.log(xwing.pilot);
// >> "Luke Skywalker"
```

## The Four Patterns of Invocation

We must *invoke* a function to run it (ie: call upon the function to do its thing). Amazingly, there are FOUR ways to invoke a function in JavaScript. This makes JS both amazingly flexible and absolutely insane.

### Function Invocation Pattern

When a function is invoked without context, the function is bound to global scope:

```js
function goBoom() {
    console.log(this);
}

goBoom();
// this === window

// This is the same as:
window.goBoom();
```

**Context**: `this` refers to the "window" object (global scope).

### Method Invocation Pattern

When a function is defined on an object, it is said to be a *method* of the object. When a method is invoked through its host object, the method is bound to its host:

```js
var deathstar = {
    goBoom: function() {
      console.log(this);
  }
};

deathstar.goBoom();
// this === deathstar
```

**Context**: `this` refers to the host object.

### Call/Apply Invocation Pattern

Function objects have their own set of native methods, most notably are `.call` and `.apply`. These methods will invoke the function with a provided contextual object.

```js
function goBoom() {
    console.log(this);
}

var deathstar = {};
goBoom.call(deathstar);
// this === deathstar
```

**Context**: `this` refers to the passed object.

### Constructor Invocation Pattern

Any function may act as a constructor for new object instances. New object instances may be constructed with the `"new"` keyword while invoking a function.

Constructors are very similar to Ruby class constructors, in that they represent proper nouns within our application. Therefore they should follow the convention of capitalized names:

```js
function Deathstar() {
    console.log(this);
}

var deathstar = new Deathstar();
// this === shiny new Deathstar instance
```

**Context**: `this` refers to the newly-created object instance.

## Summary

> 1. Is the function called with `new` (**new binding**)? If so, `this` is the newly constructed object.
>     `var bar = new foo()`
> 2. Is the function called with `call` or `apply` (**explicit binding**), even hidden inside a `bind` *hard binding*? If so, `this` is the explicitly specified object.
>     `var bar = foo.call( obj2 )`
> 3. Is the function called with a context (**implicit binding**), otherwise known as an owning or containing object? If so, `this` is *that* context object.
>     `var bar = obj1.foo()`
> 4. Otherwise, default the `this` (**default binding**). If in `strict mode`, pick `undefined`, otherwise pick the `global` object.
>     `var bar = foo()`
>
> Source: [You-Dont-Know-JS/ch2.md](https://github.com/getify/You-Dont-Know-JS/blob/58dbf4f867be0d9c51dfc341765e4e4211608aa1/this%20&%20object%20prototypes/ch2.md)

Inside a jQuery method, `$(this)` refers to the document element that was selected.
Note that `this` is not a variable. It is a keyword. You cannot change the value of `this`.

## Lab (Pair)

Pair with a partner and follow the instructions in [`this.html`](./this.html). Your goal in this assignment is to read and understand the code examples presented. Take time to contemplate the execution flow, and note any questions you have for discussion.

Many of these scripts use the special `debugger` keyword to stop JS execution and open your console. Use this opportunity to inspect your environment (perhaps by looking at `this`?) and then [continue](https://developer.chrome.com/devtools/docs/javascript-debugging).

## Additional Resources

- [Functions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Everything you wanted to know about JavaScript scope](http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
- [What You Need To Know About JavaScript Scope - Smashing Magazine](http://www.smashingmagazine.com/2009/08/01/what-you-need-to-know-about-javascript-scope/)
- [Understand JavaScript’s “this” With Clarity, and Master It | JavaScript is Sexy](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
- [You-Dont-Know-JS/README.md at master · getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)
