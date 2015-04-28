# W07D02: The DOM

## Introducing the DOM

- HTML/CSS is like a script the web browser reads to create a play: the DOM.
  - Document Object Model: a Model of the Document as an Object
  - A tree of nodes 
    - Element vs node
      - Can have text nodes; elements specifically correspond to HTML
  - `console.dir(document)`

## Console 101

- Editing styles and content
  - Mess up the Google site
- Visualizing JS objects and seeing errors
  - Demonstrate with `console.error`
  - Can write stuff directly in the console (!!!)
  - `console.dir(document)`
    - Finding stuff: childnodes, siblings, parents, etc.
  - YOU DO: Play around with this object for 10 minutes.
    - What things do you notice about it?
    - Pick an element on the page. Traverse to it. 
    - Not sure what something is? Just google `document.whatever`
    - What's the difference between `children` and `childNodes`?

## Where to put your script

- In head, or in body?

## Selecting stuff

```
getElementById
querySelector
querySelectorAll
getElementsByTagName
getElementsByClassname
```

## Changing stuff

```
setAttribute(name, value)
classList.toggle(name, [false to add, true to remove])
```

## Making stuff

1. Create the element in memory
2. Then put it somewhere

## Events

