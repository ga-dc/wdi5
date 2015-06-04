# Metaprogramming

## Learning Objectives

* Define metaprogramming and list some benefits
* Define reflexivity in teh context of Metaprogramming
* List common ways to perform metaprogamming in ruby:
  * 'monkey patching'
  * `some_object.methods`
  * `eval`
  * `send`
  * `define_method`
  * `method_missing`

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
