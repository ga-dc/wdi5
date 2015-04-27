# Intro to Javascript

## Installation DO THIS FIRST

`brew install node`

To see if it was correctly installed go ahead and type `node` into the terminal and we should enter into a JS REPL

## Learning Objectives

### Basics

- Define the roles in which JavaScript is used
- Compare and contrast Ruby and JavaScript as programming languages
- Describe the difference between variables created with and without `var`
- List the common data types in Javascript
- Explain what a "primitive" data type is
- Create an array and access / modify the items in it

### Control Flow

- Explain the difference between `==` and `===`.
- Use `if` statements to control flow in a program
- Use `for` and `while` loops
- Follow a JavaScript style guide and use the appropriate syntax.

## Outline

### Why Javascript? (10 minutes)

Where have we used Ruby so far? Server side only!

Enter JS:
- Javascript was created in 10 days in 1995 by Brendan Eich at Netscape, now Mozilla
- has no relation to the programming language java
- in recent history JS has become one of the most popular and powerful programming languages
- it's most common implementations:
  - allow client side scripts to interact with users
  - control the browser
  - communicate asynchronously
  - alter document content(the DOM)
- it can also be used for server-side network programming as well

### Ruby Recap / Framing (10 minutes)

**Listing Exercise** (5 mins + 5 mins sharing)
Have students pair up and create a mind map or list of all the parts of Ruby
we've covered so far.

Good news! Everything is basically the same, except we just have to learn
the ways in which JS is different from Ruby. As part of this, I want you to
think why would Brandon Eich decide to design the language this way?

**General Differences from Ruby**

1. SEMICOLONS EVERYWHERE!
2. CURLY BRACES EVERYWHERE!
3. PARENTHESIS EVERYWHERE!
4. VARs EVERYWHERE!
5. camelCase EVERYWHERE!


### Codealong (30 minutes)

Create a variable `var name = "bob"`
We can also instantiate a variable without `var`, like so: `full_name = "tom sawyer"`

It will become more clear to you on wednesday when we go over scope and context. For now, know that when we use the var keyword we're declaring a local variable and also for now, always use the var keyword.

### JS Datatypes

#### Primitives

The primary(primitive) data types:
- are data that are not objects and have no methods.
- are immutable
- consist of:
  - string
  - number `5` do some arithmetic
  - boolean `true` `false`
  - null
  - undefined

#### Strings

- Double vs Single quotes
- No interpolation
- Access characters as if array

#### Numbers

- All numbers are floating point
- Demonstrate `3.0-2.0 == 2.0-1.0` vs `0.3-0.2 == 0.2-0.1`
- NaN

#### Arrays

Not primitive!

- array `var numbers = [11,21,13,24,35]`
  - just like in ruby we can access values in the array `numbers[2]`
  - or modify values `numbers[1] = 55`

#### Objects

- object `var person = {name: "adam", job: "instructor", favorite_food: "carrots"}`
  - won't go too much into objects as the next lesson will dive deeper into them. For now, they are like hashes in ruby.

#### Others

The special data types:
- null
- undefined

A variable to which a programmer has not assigned anything will be undefined, but in order for a variable to become null, null must be explicitly assigned to it.

## Break (10m)

### Control Flow

#### Comparison (True/False)

So just like in ruby, we have comparison operators
- <, > `4 < 5`
- <=, >= `5 <= 5`
- ==, === (WHAT! what is this triple equals business?!)
  - `5 == "5"` `5 === "5"`
  - double equals checks for just the value (will convert)
  - where triple equals checks for both value and data type
  - show the wat video

The following values are always falsy:
- false
- 0 (zero)
- "" (empty string)
- null
- undefined
- NaN (a special Number value meaning- Not-a-Number!)

#### conditional statements

```
if (<condition 1>){
};
else if(<condition 2>){
};
else{
};
```

#### Exercise: Bouncer / AC

#### loops

```
var numbers = [1,2,3,4,5];
for (var i = 0; i < numbers.length; i++){
  console.log(numbers[i])
};

for(i in numbers){
  console.log(numbers[i])
};

var counter = 0
while(counter < 5){
  console.log(numbers[counter])
  counter++
}
```

#### Exercises: Loops

### JS basics exercise
FIZZBUZZ!~
