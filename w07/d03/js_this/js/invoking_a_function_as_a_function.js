// Invoking a Function as a Function

console.log("this(before):", this)

function hello(thing) {
  console.log("this(in hello):", this)
  console.log("Hello " + thing);
}

// this:
hello("World!")

// This function does not belong to any object.
// Therefore it belongs to the default global object.

// So, it is the same as:
// window.hello("World!")

// ************
// This desugars to (the underlying implementation):
// hello.call(window, "World!");

// !!!!!!!!!!!!!!!!!!
// WARNING
// !!!!!!!!!!!!!!!!!!

// **GOTCHA** Global variables, methods, or functions can easily
// create name conflicts and bugs in the global object.


// **Gotcha**: This behavior has changed in ECMAScript 5
//  only when using strict mode[2]: 'use strict';
