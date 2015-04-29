# W07D04 jQuery

## Intro

- It's a JS library
  - Written entirely in JS: see code content at https://github.com/jquery/jquery

## Getting set up

- Download: 
  - Note difference between compressed and uncompressed/minified
  - Also different versions of jQuery: jQuery 2 doesn't support IE6-8

- Import:
  - What does CDN stand for?
  - `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>`
    - Where should we put this element?

## Using it

```
console.log($("#header"));
console.log($("#header").innerText);
```
- Mixing jQuery and regular old Javascript!
- What would the equivalent of `$()` be in vanilla?

```
$(document).ready(function(){
});
```
- Basically `<body onload="">`

`$` vs `jQuery`
- Same thing

```
var users = ["Alice", "Bob", "Carol"];
$(users).each(function(index, value){
  console.log("User " + index + " is " + value + ".");
});

$("p").each(function(){
  $(this).css("color", "red");
});
```

## Learning it

- In this spreadsheet, write down a quick definition of what each one does, with an example code snippet of how it might be used.

```
.removeClass()
.toggleClass()
.addClass()
.hasClass()

.html()
.text()
.val()

.css()
.height()
.innerHeight()
.outerHeight()
.width()
.innerWidth()
.outerWidth()
.position()
.offset()
.scrollTop()
.scrollLeft()

.show()
.hide()
.toggle()
.fadeOut()
.fadeIn()
.slideDown()
.slideUp()

.on()
.keydown()
.keyup()
.dblclick()
.click()
.mouseover()
.mousemove()

.wrap()
.unwrap()
.append()
.prepend()
.insertAfter()
.insertBefore()
.empty()
.replaceWith()
.replaceAll()

.first()
.last()

.is()
.not()
.children()
.nextUntil()
.parentsUntil()
.next()
.find()

.trim()
.type()
.now()
.isNumeric()
.isArray()
.parseHTML()
.parseJSON()

```

## Do something!

Redo the PixelArt homework using jQuery!

## AJAX

```
.get()
.post()
.getJSON()
.getScript()
```

## Giphy gallery!

User types something into an input. When they click a button, you load an image from Giphy using their search term and then display it on the page.
