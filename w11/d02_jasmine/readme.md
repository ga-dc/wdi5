## Objectives

- Describe Jasmine
- Setup Jasmine for a Node Project
- Setup Jasmine for a Rails project
- Compare/Contrast Jasmine & RSpec
- Explain how `this` is used within Jasmine
- Create a custom matcher

---

# What is Jasmine?

---

# It's Like Rspec
## ~
## only different

---

# Jasmine
## BDD Framework for testing javascript
## ~
http://jasmine.github.io/2.0/introduction.html

Note:
It's BDD, what can you expect?

---

# It's BDD

## What can you expect?

- Setup/Teardown
- Specs: *describe, it*
- Expectations: *matchers*

---

## Why?

- trust
- small steps
- live documentation

Note:

You might be able to trust the docs or that tutorial.
Code and specs must be in sync (as long as they pass)

---

# It's BDD

- Setup/Teardown
- Specs: *describe, it*
- Expectations: *matchers*

---

## Expect the *thing we are testing* to Match our Expectation
## Expect the *Unit Under Test* to Match our Expectation


`expect(UUT).matcher(expectation)`


rspec
~~~~ rspec
expect(sum(2,3)).to be(5)
~~~~

jasmine
~~~~ javascript
expect(sum(2,3)).toBe(5);
~~~~

---

# Getting Started

1. Install jasmine-node, globally
    - `$ npm install jasmine-node -g`

2. Create new play dir (in your class_work area):
    - `jasmine_node_intro/`

Note:

globally? This is a tool that we use across projects, not something that our project's domain depends on.

---

## Write a spec

Let's start with something we can easily test.
A calculator.  Multiplication.

`2 * 3 = 6`

Let's think about usage.

What method would you create to support that equation?

Note:

`calculator.multiply(2,3)` // should equal 6

---

### Jasmine "Template"
~~~~ javascript
// require dependencies
describe(a method or feature, function () {
  it(specification, function () {
    assertion
  });
});
~~~~

---

### Our first Jasmine Spec
~~~~ javascript
// spec/calculator-spec.js
describe("multiplication", function () {
  it("should multiply 2 and 3", function () {
    var product = calculator.multiply(2, 3);
    expect(product).toBe(6);
  });
});
~~~~

---

## Run the specs

~~~~ sh
$ jasmine-node spec
~~~~

Note:

What file should we create, where?
file first, just change message.  Then contents.
`touch calculator.js`

---

## Reference our code

~~~~ javascript
// spec/calculator-spec.js
var calculator = require("../calculator");

describe...
~~~~

## Create the file

~~~~ bash
$ touch calculator.js
~~~~


Run the specs

~~~~ bash
$ jasmine-node spec
~~~~

---

How have we defined our usage?

```js
var calculator = require("../calculator");
...
calculator.multiply(2, 3);
```

---

## Create the method

~~~~ javascript
// calculator.js
exports.multiply = function (multiplier1, multiplier2) {
};
~~~~

Note:

// equivalent to:
module.exports = {
  multiply: function (multiplier1, multiplier2) {
    return 6;
  };
}

// var exports = module.exports = {};


---

## Answer the need

~~~~ javascript
return 6;
~~~~

---

## Laziness
## the [most important virtue](http://c2.com/cgi/wiki?LazinessImpatienceHubris)
## of a good programmer.
-- Larry Wall (inventor of the Perl)
## ~

Similar messages from Paul Graham (co-founded Y Combinator)

---

# Autotest

~~~~ bash
$ jasmine-node spec --autotest
~~~~

Note:

Runs all of our specs whenever we change a spec

---

## Watch for *any* change
## Run the specs... in color

~~~~ bash
$ jasmine-node spec --autotest --color --watch .
~~~~

---

## Triangulate

~~~~ javascript
# spec/calculator-spec.js
it("should multiply 3 and 5", function () {
  var product = calculator.multiply(3, 5);
  expect(product).toBe(15);
});
~~~~

---

## Make it work

~~~~ javascript
return multiplier1 * multiplier2;
~~~~

```
2 tests, 2 assertions, 0 failures, 0 skipped
```

---

## Add spec for "division"... together

Note:

---

## division

~~~~ javascript
describe("division", function() {
    it("should divide 10 by 2", function() {
        var product = calculator.divide(10, 2);
        expect(product).toBe(5);
    });
});
~~~~

---

## Exercise:

1. Make this pass
2. Triangulate (add more specs to force you to write the correct code)
3. Write specs for when zero is passed to multiply & divide
4. Make your calculator support "calculator.squareRoot"

Note:
Lazy: is what javascript returns good enough?

---

# AMA

---

# The Jasmine Project

http://jasmine.github.io/2.0/introduction.html

---

## Exercise: Move your calculator specs and library to this format

- View spec results in `SpecRunner.html`
- Make your calculator support "calculator.squared"

---

## Exercise: Average (in Rails)

- Remmeber the jasmine_rails project from last night's homework?
- Copy with `average/average_spec.js` to `jasmine_rails/spec/javascripts/average_spec.js`
- run your specs: `RAILS_ENV=test bundle exec rake spec:javascript`
- Make them pass

### jasmine-rails

https://github.com/searls/jasmine-rails

---

Review Learning Objectives

---

# References

- jasmine tutorial: http://blog.codeship.io/2013/08/20/testing-tuesday-19-how-to-test-node-js-applications-with-jasmine.html
- guard: https://github.com/guard/guard
- jasmine: http://jasmine.github.io/2.0/introduction.html
- jasmine-rails: https://github.com/searls/jasmine-rails
