// Invoking a Function with a Function Constructor

//If a function invocation is preceded with the new keyword, it is a constructor invocation.
//It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:

// This is a function constructor:
function Person(firstName, lastName) {
  console.log("this(in Person):", this);
  this.firstName = firstName;
  this.lastName  = lastName;
}

// This	creates a new object
var ada = new Person("Ada","Lovelace");
ada.firstName;
typeof ada;
typeof Person;

// Note the difference between this and...
// var ada = {
//   firstName: "Ada",
//   lastName: "Lovelace"
// }
// ada.firstName;

// This is reusable...
// var grace = new Person("Grace", "Hopper");
// grace.firstName;
