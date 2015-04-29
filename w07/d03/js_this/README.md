![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# What is `this`?

![What is this?](http://i.giphy.com/bYGMDZP58u5bi.gif)

## Objectives

By the end of this, students should be able to:

- Recall whether or not `this` is determined at declaration.
- Explain what `this` points to in each calling context.
- Read and follow the execution context of code that uses different `this` idioms.

## Instructions

1. Fork and clone.
1. `npm install`
1. `bower install`
1. Follow along.

## `this` Is A Referent

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

## jQuery's `$(this)`

When we select an element using jQuery, `$(this)` will point to the element selected. `$(this)` is most often used with event handlers, in which case it points to the target of the event callback.

```js
$('button').click(function () {
    $(this).css('background-color', 'red');
});

// click the button, observe background changes to red
```

Using `$(this)` with jQuery should be your default choice, since `this` is a JavaScript keyword and won't have any jQuery methods (`.css`, `.append`, `.val`, etc.).

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

## Lab (Pair)

Pair with a partner and review each of the following examples in order. Your goal in this assignment is to read and understand the code examples presented. Take time to contemplate the execution flow, and note any questions you have for discussion.

For each example, you will edit `app/this.html` to include the appropriate script from `app/js`.  Review the script for instructions before you refresh your browser window. Many of this scripts use the special `debugger` keyword to stop JS execution and open your console. Use this opportunity to inspect your environment (perhaps by looking at `this`?) and then [continue](https://developer.chrome.com/devtools/docs/javascript-debugging).

- `object_literal.js` - 'this' in an object literal.
- `global_function.js` - 'this' in a global function.
- `event_handler_broken.js` - Broken button event handler.
- `event_handler_fixed.js` - Fixed button event handler.
- `inner_function_bad.js` - Broken inner function.
- `inner_function_fixed.js` - Fixed inner function.
- `reassign_method_bad.js` - Changing the runtime context of a method to the global object.
- `reassign_method_fixed.js` - Changing the runtime context of a method with the javscript _bind_ function.
- `jquery_this.js` - jQuery's `$(this)` versus `this`

## Additional Resources

- [Understand JavaScript’s “this” With Clarity, and Master It | JavaScript is Sexy](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
- [You-Dont-Know-JS/README.md at master · getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)
- [codepaq: jQuery - this vs $(this)](http://codepaq.blogspot.com/2013/11/jquery-this-vs-this.html)
