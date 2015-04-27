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

* How do we define a method in Ruby?
* How do we define a method in JavaScript?
  * Trick question.  We don't.  We define **functions**.


* Pro Tip:  MDN Reference vs. Guide
  * Google: `mdn js function`
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

* Reference Scavenger Hunt (5 min): 2 ways to define a function named 'sum' that accepts 2 addends.
  * var sum = new Function('addend1', 'addend2', 'return addend1 + addend2');
  * var sum = function(addend1, addend2) { ... }
  * function sum(addend1, addend2) { ... }
  * ([param] [, param]) => {
   statements
}

* Review signatures (on board)
  * function declaration (or function statement)
    * function func(a,b) {};
  * function expression
    * var funcName = function(a, b) {};
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
* Implement `reduce` in javascript

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
