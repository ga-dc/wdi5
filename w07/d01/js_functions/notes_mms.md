Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Javascript Functions

## Learning Objectives

- Define what a function is in Javascript and how it compares to a Ruby method
- Describe how function arguments and return values are different from Ruby
- Differentiate between function declarations and expressions
- Define `hoisting`
- Define a closure in the context of programming

## Outline

### Defining and calling methods

**I do**

* It's Ruby... but different

* How do we define a method in Ruby?
* How do we define a method in JavaScript?
  * Trick question.  We don't.  We define **functions**.


* Reference Scavenger Hunt (5 min): 2 ways to define a function named 'sum' that accepts 2 addends.
  * `var sum = new Function('addend1', 'addend2', 'return addend1 + addend2');`
  * `var sum = function(addend1, addend2) { return addend1 + addend }`
  * `function sum(addend1, addend2) { return addend1 + addend }`

* #ProTip:  MDN Reference vs. Guide
  * Google: `mdn js function`
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions


* Review signatures (on board)
  * function declaration (or function statement)
    * `function func(a,b) {};`
  * function expression
    * `var funcName = function(a, b) {};`
    * **anonymous** function

* Operations on different data types

**You do** Our First Function

* (6 min, productive struggle) Write a function to sum two addends.

```
> sum(1,2);
<- 3
```

* What did we learn?
  * Parenthesis
  * Explicit returns
  * Missing arguments
  * Too many arguments

* Demonstrate loose arguments
  * Extra arguments are ignored
  * Undefined arguments are undefined

* Did anyone try both declaration and expression?  Did you notice any difference?

** You Do:** Function exercises

* Write a function to accept three numbers and return their product.
* Write a function to accept an age and returns
  * true if you can vote
  * false if you cannot vote
* Write a function to accept an array and print the elements in order

**I do**

* What is hoisting?

```
hoisted(); // logs "hoisted"

function hoisted() {
  console.log("hoisted");
}
```
**not**
```
not_hoisted(); // ReferenceError: not_hoisted is not defined

not_hoisted = function() {
  console.log("hoisted");
}
```

### Fundamental Objects

* some of you may have noticed that 'every function is actually a Function object'
  * First-class object
  * Ruby: "abc".size #=> 3
  * JS:
    * sum.length;
    * product.length;
* Review MDN Fundamental Objects https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

* Difference between parentheses and no parentheses
  * Referring to a function vs...
  * Calling a function


### Scope

* Variables in the scope of the function's creation.
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Function_scope
  * Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.
  * However, a function can access all variables and functions defined inside the scope in which it is defined.

* Pass a function to a function as a parameter, call it inside.

**We do**

* Implement `each` in javascript
  * for each element in a collection, perform a function
  * Given:
  ```js
var prefix = "The element is ";
var printer = function(el) {
  console.log(prefix + el);
}
  ```

  * `each([2,"abc"],printer)`
  ```
  The element is 2
  The element is abc
  ```

* Implement `reduce` in javascript
  * for each element in collection, perform a function and use the result to perform the next function
    * Given the functions `sum` and `product`:
    * `reduce([2,3], sum); #=> 5`
    * `reduce([2,3,1], sum); #=> 6`
    * `reduce([2,3], product); #=> 6`
    * `reduce([2,3,2], product); #=> 12`


### Closures

* Closures are one of the most powerful features of JavaScript
  * nesting of functions
  * grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to). * * outer function does NOT have access to the variables and functions defined inside the inner function.
* example: note `name` in `getName`
```js
var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
}
var myPet = pet("Vivie");

myPet();  
```


### ECMAScript 6 [Optional]

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
  * default params
  * rest parameters
  * shorter functions (=>), anonymous

## Closing

Please come to the board and...
- Write the function definition (just the signature) for a method that would return a full name and accepts first, last, middle.
- Make that function work
- Test it.
- Test it without passing a middle name.  Fix it (if necessary).
- Demonstrate hoisting using this code.
- define a variable for you, as a function that accepts last, first, middle.  And contains the above function.

```js
var person = function(last, first, middle) {
  var getFullName = function() {
    var fullName = first;
    if(middle) {
      fullName += " " + middle;
    }
    fullName += " " + last;  
    return fullName;
  }
  return getFullName;
};

var me = person("Scilipoti", "Matt", "M.");
me();
```

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
