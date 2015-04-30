# Jquery

## LO's
- Explain when to use "vanilla" Javascript vs jQuery.
- Import Javascript libraries.
- Explain what a CDN is.
- Use jQuery to create, modify, and add responsiveness to nodes in the DOM.


### Opening Framing (15m)
So we've learned alot of javascript this week. We've learned how to access the DOM, add event listeners to it, and manipulate it. Wouldn't it be nice if there was a nice little library that abstracts some of this code out? Well there is.

Enter jQuery.


jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

- One important thing to know is that jQuery is just a JavaScript library.
- you can use the two in conjunction with the other, but you can't call vanilla-JS functions/methods on jQuery objects, and vice versa

- When should I use jQuery and when should i use vanilla JS? I'll be honest, jQuery might be a bit of a crutch for me. But its super important to understand the underlying JS behind it all. Often times run times are much faster with vanilla JS.

[Cool website that shows runtimes for vanilla js vs jquery](http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/)
### CDN(10m)
- What's a CDN?
  - content delivery network
  - The goal of a CDN is to serve content to end-users with high availability and high performance
  - minified vs reg
Create an html page and include jquery cdn
- google jquery cdn, show different versions, highlight compatibilities, show you can select minified/uncompressed
- `<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>`

### Important jQuery functions(Gigantic CodeAlong 60m /w break)
#### Read/selecting
- The most basic concept of jQuery is to "select some elements and do something with them."
- `$()`selecting elements by:
  - id: `$("#someID")`
  - class: `$(".someClass")`
  - attribute: `$("someHTMLTag[someAttr='attrValue']")`
  - you can also compound selectors together
    - ex: `$("someHTMLTag.someClass .anotherClass #someID")`
  - can also use psuedo selectors like: `$("someHTMLTag:checked")`


- you can only call jQuery methods on something with a `$()`

- use css selectors to select dom elements, but really what's returned is a jQuery object and not a DOM object, which is why we can't use vanilla JS functions on jQuery objects and vice versa.

#### Addition
- `.append()`
  - the selector expression preceding the method is the container into which the content(argument) is inserted
- `.appendTo()`
  - the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container(argument)
- `.prepend()`
  - same as append but inserts the specified content(argument) as the first child
- `.prependTo()`
  - same as appendto but the content precedes the method call is inserted as the first child of the target container(argument)
- `.html()`
  - get or set the HTML contents
    - get: no argument
    - set: one argument that you want the html content to be
- `.text()`
  - get or set the text contained, it will strip the HTML elements
  - same as `.html()`

#### Removal
- `.remove()`
  - removes the jquery object it is called on, as well as bound events and everything inside it
- `.empty()`
  - removes all the child elements of the jquery object it is called on
- `.detach()`
  - works the same as remove but maintains all jquery data associated with the removed element

#### Edition
- `.attr()`
  - acts as both a getter and setter
    - setter: requires 2 arguments(key/value pair), or an object(with multiple key/value pairs)
    - getter: requires 1 argument to get the value of the attribute from the jQuery object
- `.css()`
  - acts as both a getter and setter
    - setter: requires 2 arguments(key/value pair), or an object(with multiple key/value pairs)
    - getter: requires 1 argument to get the value of the attribute from the jQuery object
- `.val()`
  - setter: pass in an argument
  - getter: pass in no argument

## BREAK(10m)
#### Other
- `.show()`
  - changes a `display:none` to `display:block` or whatever it initially was
- `.hide()`
  - changes elements style to have `display:none`
- `.each()`
  - loops through collections of jquery objects
  - `$(".somejQueryClass").each(function(index){//code goes here})`
- `.addClass()`
  - does not replace existing classes
  - pass in argument of 1 string to add 1 or more classes
- `.removeClass()`
  - pass in argument of 1 string remove 1 or more classes
- `.children()`
  - collect all child jquery objects of a the jquery object it is being called on
- `.on()`
  - a way to create event listeners
  - takes two arguments normally
    - first argument is the event
    - second argument is the callback
  - What is `$(this)`?
    - refers to the jquery object you called `.on` on, as long as you're in the scope of the `.on` function

### Using `$(document).ready()`
A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside `$( document ).ready()` will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.

### Documentation Dive
- Break up into groups of 3 or 4
- Find 2 methods that haven't been discussed in class
- Figure out what they do
- Be prepared to explain them and potentially code them.

### Class Exercise
- Refactor Pixel Art or Timer to incorporate jQuery

## Documentation
[jQuery Docs](https://jquery.com/)
