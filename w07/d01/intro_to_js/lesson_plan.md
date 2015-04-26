# Intro to Javascript

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

#### Opening Framing (15m)
PKI- Let's take some time, and just write everything we've learned up until now.(5m)

T & T(10m)
Have them play cookie clicker!  Then do a turn and talk with their neighbor.
- Prompt - How would you create this website with their current skillset, is it even possible? What elements of web development are missing right now in order for us to create the behaviors on this site?

## Enter javascript
### Javascript history and Background(15m)
- Javascript was created in 10 days in 1995 by Brendan Eich at Netscape, now Mozilla
- has no relation to the programming language java
- in recent history JS has become one of the most popular and powerful programming languages
- it's most common implementations:
  - allow client side scripts to interact with users
  - control the browser
  - communicate asynchronously
  - alter document content(the DOM)
- it can also be used for server-side network programming as well

### JS vs Ruby side by side(30 m)
Unfortunately, we can't learn how to make cookie clicker until we nail down some basics first.
## Installation
`brew install node`

To see if it was correctly installed go ahead and type `node` into the terminal and we should enter into a JS REPL

Create a variable `var name = "bob"`
We can also instantiate a variable without `var`, like so: `full_name = "tom sawyer"`

It will become more clear to you on wednesday when we go over scope and context. For now, know that when we use the var keyword we're declaring a local variable and also for now, always use the var keyword.

Go over other datatypes after string
### JS Datatypes(do in both node and pry side by side)
The primary(primitive) data types:
- A primitive (primitive value, primitive data type) is data that is not an object and has no methods.
- string
- number `5` do some arithmetic
- boolean `true` `false`

The composite data types:
- object `var person = {name: "andy", job: "instructor"}`
  - won't go too much into objects as the next lesson will dive deeper into them. For now, they are like hashes in ruby.
- array `var numbers = [11,21,13,24,35]`
  - just like in ruby we can access values in the array `numbers[2]`
  - or modify values `numbers[1] = 55`
    -
    ```
    > numbers

    [11, 55, 13, 24, 35]
    ```

The special data types:
- null
- undefined

A variable to which a programmer has not assigned anything will be undefined, but in order for a variable to become null, null must be explicitly assigned to it.


## Break (10m)

### Control Flow
So just like in ruby, we have comparison operators
- <, > `4 < 5`
- <=, >= `5 <= 5`
- ==, === (WHAT! what is this triple equals business?!)
  - `5 == "5"` `5 === "5"`
  - double equals checks for just the value, where triple equals checks for both value and data type

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

### JS basics exercise
