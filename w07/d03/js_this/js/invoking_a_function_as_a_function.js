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

// Global variables, methods, or functions can easily
// create name conflicts and bugs in the global object.
