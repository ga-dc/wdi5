'use strict';

// Global variables
var firstName = "Peter",
lastName = "Ally";

// Global function
function showFullName () {

    // Hey, what is the 'this' variable pointing to?
    debugger;

    // Yep, its the global object, always window in a browser.

    // Why?
    // Because the runtime Context of this function is the global
    // object/window.

    // Why?
    // Because we invoked this function at RUNTIME
    // like this 'showFullName()' or like 'window.showFullName()' below.

    // "this" inside this function will have the value of the window object
    // because the showFullName () function is defined in the global scope, just like the firstName and lastName
    console.log (this.firstName + ' ' + this.lastName);
}

// Global person, it's an object literal
var person = {
    firstName   :'Penelope',
    lastName    :'Barrymore',
    showFullName:function () {
        // "this" on the line below refers to the person object, because the showFullName function will be invoked by person object.
        console.log (this.firstName + ' ' + this.lastName);
        return this.firstName + ' ' + this.lastName;
    }
};

// Invoke the Global function
// The execution "Context" is Global, or window in a browser.
// So the 'this' pointer is window.
showFullName (); // Peter Ally

// window is the object that all global variables and functions are defined on, hence:
window.showFullName (); // Peter Ally

// "this" inside the showFullName () method that is defined inside the person object still refers to the person object, hence:
person.showFullName (); // Penelope Barrymore
