# JavaScript && The DOM

## Screencasts

- https://vimeo.com/126371833
- https://vimeo.com/126371834

```js
var html = "<!DOCTYPE html><html><head><title>My Site</title></head><body></body></html>"; // lol
```

How can you get the title?

- [read the docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [read the spec](http://www.w3.org/TR/dom/#nodes)

### Document

`document`
  - `document.head`
  - `document.body`

Each web page loaded in the browser has its own document object. The Document interface serves as an entry point to the web page's content 

`document.body`
  - .children
  - .childNodes
  - .firstChild
  - .lastChild
  - .nextSibling
  - .parentElement
  - .parentNode

### Selecting DOM elements

- document.getElementById
- document.getElementsByTagName
- document.getElementsByClassName
- document.querySelector
- document.querySelectorAll

### You Do: Traversing the DOM

### Altering DOM Elements

- .textContent
- .innerHTML
- .setAttribute(name, value);
- .id
- .classList.toggle (add, remove, contains)
- .style

### Creating/Removing DOM Elements

- .createElement
- .appendChild
- .removeChild

### You do: Logo hijack

## Break

### You do: About Me

### You do: The Book List

## Lunch

### Events
- https://developer.mozilla.org/en-US/docs/Web/API/Event

- .onclick
- .addEventListener
  - click
  - mouseover
- .preventDefault()

### Color Scheme Switcher

- [jessica hische](http://jessicahische.is/)

### Cash Register

### ATM