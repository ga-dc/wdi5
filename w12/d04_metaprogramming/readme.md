# Metaprogramming

## Learning Objectives

* Define metaprogramming and list some benefits
* Define reflexivity in the context of Metaprogramming
* List common ways to perform metaprogamming in ruby:
  * `eval`
  * `send`
  * `define_method`
  * `method_missing`
* Blow your minds by thinking about quines

## Outline

**Metaprogramming** - computer programs with the ability to treat programs as their data.

This term encompasses quite a few different scenarios... some examples might include:
* Code that reads other program source and tries to understand it
  * e.g. vulnerability scanners, code quality analysis tools
* Code that generates a new program (writes source code)
  * e.g. macros and script writers
* Code that can `introspect` (read) information about itself. Examples include `Object.keys(some_object)` in JS.
* Running dynamically generated text as code (e.g. taking user input as code)
* A program modifying its own source code / state at run-time

The ability of a programming language to inspect / modify itself (rather than
just read or write code relating to a different program) is called reflection or
reflexivity.

Today we're going to give a quick survey of few different techniques in ruby, to
illustrate the types of metaprogamming available, and some use cases.

### eval

One of the simplest examples of metaprogramming (that actually works in both
ruby and JS) is `eval()`. `eval` is a method that takes a string as input, and
*evaluates* that string as code.

```ruby
eval("1+1") # outputs 2

puts "type some code you'd like to run:"
code_to_run = gets.chomp
eval(code_to_run) # this is dangerous!
```

It's really interesting, and sorta-cool, but here's a tip... don't ever do it!

1. Improper use of eval opens up your code for injection attacks
2. Debugging can be more challenging (no line numbers, etc.)
3. eval'd code executes more slowly (no opportunity to compile/cache eval'd code)

```js
//bad!
function isChecked(optionNumber) {
    return eval("forms[0].option" + optionNumber + ".checked");
}

var result = isChecked(1);

//better
function isChecked(optionNumber) {
    return forms[0]["option" + optionNumber].checked;
}

var result = isChecked(1);
```

### define_method

Consider ActiveRecord's dynamic finder methods...

```ruby
class Artist << ActiveRecord::Base
end

Artist.find_by_nationality("USA")
Artist.find_by_age(27)
```

Do you think ActiveRecord has a pre-defined method called `find_by_nationality()`
or `find_by_age()`?
Nope, or course not! How could they predict all the possible `find_by` methods
we'd need?

Instead, there's some metaprogramming going on!

Here's a simple example of how `define_method` can be used, then we'll consider
how it's used in ActiveRecord.

```ruby
["hello", "goodbye", "sup"].each do |word|
  define_method "say_#{word}" do
    puts word
  end
end
```

### Exercise

Try writing some psuedo-code to generate the dynamic finders in AR.

Tip:
```ruby
Post.attribute_names # returns [ "id", "title", "content", "author_name" ]
```

**Solution**
```ruby
Post.attribute_names.each do |attr|
  define_method "find_by_#{attr}" do |value|
      where("#{attr} = ?", value)
  end
end
```

### method_missing



### send

### quines

**Quine** - A program that generates it's own source code (without cheating by
printing itself out).

#### Ruby Example

```ruby
def method;
  "def method;;end;puts method()[0, 11] + 34.chr + method + 34.chr + method()[11, method.length-11]";
end;

puts method()[0, 11] + 34.chr + method + 34.chr + method()[11, method.length-11]
```

#### Crazy Examples

https://github.com/mame/quine-relay

http://d.hatena.ne.jp/ku-ma-me/20100905/p1
http://screencast.com/t/yyoO5UJIPif
